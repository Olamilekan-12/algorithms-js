function recursiveFibonacci(n){
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))
console.log(recursiveFibonacci(8))

// recursiveFibonacci(8) = 13 + 8 = 21
// recursiveFibonacci(7) = 8 + 5 = 13
// recursiveFibonacci(6) = 5 + 3 = 8
// recursiveFibonacci(5) = 3 + 2 = 5
// recursiveFibonacci(4) = 2 + 1 = 3
// recursiveFibonacci(3) = 1 + 1 = 2
// recursiveFibonacci(2) = 1 + 0 = 1
// recursiveFibonacci(1) = 1

