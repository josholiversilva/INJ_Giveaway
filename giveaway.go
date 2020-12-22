package main

import (
	"fmt"
	"net/http"
	"log"
)

func handlerFunc(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
	//http.HandleFunc("/", handlerFunc)
	http.Handle("/", http.FileServer(http.Dir("./static/")))
	log.Println("Listening on :8080...")
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
	  log.Fatal(err)
	}
}