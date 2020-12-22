package main

import (
	"fmt"
	"net/http"
	"os"
	"log"
)

func handlerFunc(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	//http.HandleFunc("/", handlerFunc)
	http.Handle("/", http.FileServer(http.Dir("./static/")))
	log.Println("Listening to all network connections...")
	err := http.ListenAndServe(":" + os.Getenv("PORT"), nil)
	if err != nil {
	  log.Fatal(err)
	}
}