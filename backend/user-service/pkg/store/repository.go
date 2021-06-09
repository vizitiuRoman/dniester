package store

import (
	"context"

	. "github.com/user-service/pkg/domain"
)

// UserRepo is a store for users
//go:generate mockery --dir . --name UserRepo --output ./mocks
type UserRepo interface {
	CreateUser(context.Context, *User) (*User, error)
	GetUser(context.Context, uint64) (*User, error)
	UpdateUser(context.Context, *User) (*User, error)
	DeleteUser(context.Context, uint64) error
	GetUserByEmail(context.Context, string) (*User, error)
}
