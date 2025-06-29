package bootstrap

import (
	"github.com/goravel/framework/foundation"

	"launchserver/config"
)

func Boot() {
	app := foundation.NewApplication()

	// Bootstrap the application
	app.Boot()

	// Bootstrap the config.
	config.Boot()
}
