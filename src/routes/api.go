package routes

import (
	"github.com/goravel/framework/facades"

	"launchserver/app/http/controllers"
)

func Api() {
	userController := controllers.NewUserController()
	facades.Route().Get("/users/{id}", userController.Show)
}
