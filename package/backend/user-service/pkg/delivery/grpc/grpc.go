package grpc

import (
	"context"

	pb "github.com/user-service/grpc-proto/user"
	. "github.com/user-service/pkg/domain"
	"github.com/user-service/pkg/services"
	"go.uber.org/zap"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type UserGRPC struct {
	services *services.Manager
	logger   *zap.SugaredLogger
}

func NewGRPCUser(services *services.Manager, logger *zap.SugaredLogger) *UserGRPC {
	return &UserGRPC{services, logger}
}

func (grpc *UserGRPC) CreateUser(ctx context.Context, req *pb.CreateUserReq) (*pb.UserRes, error) {
	err := req.Validate()
	if err != nil {
		grpc.logger.Errorf("[grpc.CreateUser] error validate user: %v", err)
		return nil, status.Errorf(codes.InvalidArgument, err.Error())
	}

	createdUser, err := grpc.services.User.CreateUser(
		ctx,
		&User{
			Email: req.Email, Password: req.Password,
		})
	if err != nil {
		grpc.logger.Errorf("[grpc.CreateUser] error create user: %v", err)
		return nil, status.Errorf(codes.AlreadyExists, err.Error())
	}

	return &pb.UserRes{Id: createdUser.ID, Email: createdUser.Email}, nil
}

func (grpc *UserGRPC) UpdateUser(ctx context.Context, req *pb.UpdateUserReq) (*pb.UserRes, error) {
	err := req.Validate()
	if err != nil {
		grpc.logger.Errorf("[grpc.UpdateUser] error validate user: %v", err)
		return nil, status.Errorf(codes.InvalidArgument, err.Error())
	}

	updatedUser, err := grpc.services.User.UpdateUser(ctx, &User{
		ID: req.Id, Email: req.Email, Password: req.Password,
	})
	if err != nil {
		grpc.logger.Errorf("[grpc.UpdateUser] error update user: %v", err)
		return nil, status.Errorf(codes.Internal, err.Error())
	}

	return &pb.UserRes{Id: updatedUser.ID, Email: updatedUser.Email}, nil
}

func (grpc *UserGRPC) DeleteUser(ctx context.Context, req *pb.UserReq) (*pb.Stub, error) {
	err := grpc.services.User.DeleteUser(ctx, req.Id)
	if err != nil {
		grpc.logger.Errorf("[grpc.DeleteUser] error delete by id: %v", err)
		return nil, status.Errorf(codes.Internal, err.Error())
	}
	return &pb.Stub{}, nil
}

func (grpc *UserGRPC) VerifyUser(ctx context.Context, req *pb.VerifyUserReq) (*pb.UserRes, error) {
	err := req.Validate()
	if err != nil {
		grpc.logger.Errorf("[grpc.VerifyUser] error validate user: %v", err)
		return nil, status.Errorf(codes.InvalidArgument, err.Error())
	}

	verifiedUser, err := grpc.services.User.VerifyUser(ctx, req.Email, req.Password)
	if err != nil {
		grpc.logger.Errorf("[grpc.VerifyUser] error verify password: %v", err)
		return nil, status.Errorf(codes.InvalidArgument, "Invalid email or password")
	}

	return &pb.UserRes{Id: verifiedUser.ID, Email: verifiedUser.Email}, nil
}

func (grpc *UserGRPC) GetUser(ctx context.Context, req *pb.UserReq) (*pb.UserRes, error) {
	foundUser, err := grpc.services.User.GetUser(ctx, req.Id)
	if err != nil {
		grpc.logger.Errorf("[grpc.GetUser] error find user by id: %v", err)
		return nil, status.Errorf(codes.NotFound, "Not found user")
	}
	return &pb.UserRes{Id: foundUser.ID, Email: foundUser.Email}, nil
}

func (grpc *UserGRPC) GetUsers(ctx context.Context, stub *pb.Stub) (*pb.UsersRes, error) {
	return &pb.UsersRes{}, nil
}
