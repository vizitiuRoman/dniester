package main

import (
	"log"

	"github.com/user-service/pkg/server"
)

func main() {
	err := server.Run()
	if err != nil {
		log.Fatal(err)
	}
}
