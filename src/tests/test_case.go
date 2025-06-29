package tests

import (
	"github.com/goravel/framework/testing"

	"launchserver/bootstrap"
)

func init() {
	bootstrap.Boot()
}

type TestCase struct {
	testing.TestCase
}
