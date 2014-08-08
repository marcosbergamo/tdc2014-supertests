package main

import (
    "fmt"
    "os"
    "strconv"
    )

func main(){
    if(len(os.Args) < 2){
        fmt.Println("Você deve passar 2 numeros");
        os.Exit(1);
    }

    expression := os.Args[1: len(os.Args)];
    a, _ := strconv.Atoi(expression[0]);
    b, _ := strconv.Atoi(expression[1]);

    if(a > b){
        fmt.Println(expression[0]);
    }else{
        fmt.Println(expression[1]);
    }

    os.Exit(0);
}
