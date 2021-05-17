package services

import (
	"context"

	. "github.com/user-service/pkg/domain"
)

// UserService is a service for users
//go:generate mockery --dir . --name UserService --output ./mocks
type UserService interface {
	CreateUser(context.Context, *User) (*User, error)
	GetUser(context.Context, uint64) (*User, error)
	UpdateUser(context.Context, *User) (*User, error)
	DeleteUser(context.Context, uint64) error
	GetUserByEmail(context.Context, string) (*User, error)
	VerifyUser(context.Context, string, string) (*User, error)
}
