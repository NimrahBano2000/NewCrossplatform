package main

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/go-ping/ping"
	"github.com/gorilla/websocket"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

// "errors"
// "fmt"
// "io/ioutil"
// "log"
// "net/http"
// "os"

// "github.com/gorilla/websocket"
// "github.com/labstack/echo"
// "github.com/labstack/echo/middleware"
// "github.com/gorilla/websocket"
// "github.com/labstack/echo"
// "github.com/labstack/echo/middleware"

var upgrader = websocket.Upgrader{}

type Message struct {
	Message string `json:"message"`
}

func main() {

	// pinger, err := ping.NewPinger("www.gmail.com")
	// if err != nil {
	// 	panic(err)
	// }
	// pinger.Count = 3
	// err = pinger.Run() // Blocks until finished.
	// if err != nil {
	// 	panic(err)
	// }
	// stats := pinger.Statistics()
	// fmt.Println(stats)

	// response, err := http.Get("https://jsonplaceholder.typicode.com/posts/1")
	// if err != nil {
	// 	fmt.Print(err.Error())
	// 	os.Exit(1)
	// }

	// responseData, err := ioutil.ReadAll(response.Body)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// //
	// fmt.Println(string(responseData))

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	e.GET("/ws", func(c echo.Context) error {
		upgrader.CheckOrigin = func(r *http.Request) bool { return true }

		ws, err := upgrader.Upgrade(c.Response().Writer, c.Request(), nil)
		if !errors.Is(err, nil) {
			fmt.Println(err)
		}
		defer ws.Close()

		fmt.Println("Connected!")

		for {
			var message Message
			err := ws.ReadJSON(&message)
			if !errors.Is(err, nil) {
				fmt.Printf("error occurred: %v", err)
				break
			}
			fmt.Println(message.Message)
			pinger, err := ping.NewPinger(message.Message)
			if err != nil {
				panic(err)
			}
			pinger.Count = 3
			err = pinger.Run() // Blocks until finished.
			if err != nil {
				panic(err)
			}
			stats := pinger.Statistics()
			fmt.Println(stats)

			// send message from server
			if err := ws.WriteJSON(stats); !errors.Is(err, nil) {
				fmt.Printf("error occurred: %v", err)
			}
		}

		return nil
	})
	e.Logger.Fatal(e.Start(":8080"))

	fmt.Println("Hello world!")
}
