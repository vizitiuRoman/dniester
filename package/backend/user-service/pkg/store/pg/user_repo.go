package pg

import (
	"context"

	"github.com/jmoiron/sqlx"
	. "github.com/user-service/pkg/domain"
)

type userRepo struct {
	db *sqlx.DB
}

func NewUserRepo(db *sqlx.DB) *userRepo {
	return &userRepo{db: db}
}

func (repo *userRepo) CreateUser(ctx context.Context, user *User) (*User, error) {
	rows, err := repo.db.NamedQueryContext(
		ctx,
		`
			INSERT INTO users (email, password)
			VALUES (:email, :password)
			RETURNING email, id;
		`,
		&user,
	)
	if err != nil {
		return &User{}, err
	}
	if rows.Next() {
		err = rows.StructScan(&user)
		if err != nil {
			return &User{}, err
		}
	}
	return user, nil
}

func (repo *userRepo) GetUser(ctx context.Context, userID uint64) (*User, error) {
	user := &User{}
	err := repo.db.GetContext(ctx, user, "SELECT email, id FROM users WHERE id = $1", userID)
	if err != nil {
		return &User{}, err
	}
	return user, nil
}

func (repo *userRepo) UpdateUser(ctx context.Context, user *User) (*User, error) {
	rows, err := repo.db.QueryContext(
		ctx,
		`
			UPDATE users 
			SET email=$2, password=$3 
			WHERE id = $1
		`,
		user.ID, user.Email, user.Password,
	)
	if err != nil {
		return &User{}, err
	}
	if rows.Next() {
		err = rows.Scan(&user)
		if err != nil {
			return &User{}, err
		}
	}
	return user, nil
}

func (repo *userRepo) DeleteUser(ctx context.Context, userID uint64) error {
	_, err := repo.db.QueryContext(
		ctx,
		`DELETE FROM users WHERE id = $1`,
		userID,
	)
	if err != nil {
		return err
	}
	return nil
}

func (repo *userRepo) GetUserByEmail(ctx context.Context, email string) (*User, error) {
	user := &User{}
	err := repo.db.GetContext(ctx, user, "SELECT email, id, password FROM users WHERE email = $1", email)
	if err != nil {
		return &User{}, err
	}
	return user, nil
}
