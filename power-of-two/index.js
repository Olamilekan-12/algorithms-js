function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n > 1){
        if(n % 2 !== 0){
            return false
        }
        n = n / 2
    }
    return true
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))

//Big O = O(logn)

//MORE OPTIMAL SOLUTION
// function isPowerOfTwoBitWise(n){
//     if(n < 1){
//         return false
//     }
//     return (n & (n - 1)) === 0

// }
