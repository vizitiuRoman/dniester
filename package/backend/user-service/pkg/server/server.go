package server

import (
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"

	"github.com/joho/godotenv"
	pb "github.com/user-service/grpc-proto/user"
	"github.com/user-service/pkg/controller"
	"github.com/user-service/pkg/logger"
	"github.com/user-service/pkg/services"
	"github.com/user-service/pkg/store"
	"google.golang.org/grpc"
)

func Run() error {
	err := godotenv.Load()
	if err != nil {
		return err
	}

	s, err := store.NewStore()
	if err != nil {
		return err
	}

	startGRPC(s, os.Getenv("PORT"))
	return nil
}

func startGRPC(store *store.Store, port string) {
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	listenCh := make(chan error, 1)
	interruptCh := make(chan os.Signal, 1)
	zapLogger := logger.NewLogger()

	listener, err := net.Listen("tcp", ":"+port)
	if err != nil {
		zapLogger.Fatalf("Listen error: %v", err)
	}

	gRPCServer := grpc.NewServer()
	pb.RegisterUserServiceServer(
		gRPCServer, controller.NewUserController(services.NewManager(store), zapLogger),
	)

	go func(listen chan error) {
		zapLogger.Info("Service started on port: " + port)
		listen <- gRPCServer.Serve(listener)
	}(listenCh)

	signal.Notify(interruptCh, syscall.SIGINT, syscall.SIGTERM)
	waitShutdown(listenCh, interruptCh)
}

func waitShutdown(listen chan error, interrupt chan os.Signal) {
	for {
		select {
		case err := <-listen:
			if err != nil {
				log.Fatalf("Listener error: %v", err)
			}
			os.Exit(0)
		case err := <-interrupt:
			log.Fatalf("Shutdown signal: %v", err.String())
		}
	}
}
