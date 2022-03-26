const findLongestPrefix = (s1,s2) => {
    let i=0,j=0,res = "";
    while(i < s1.length && j < s2.length) {
        if(s1[i] !== s2[j]) break;
        res += s1[i]
        i++; j++;
    }
    return res;
}

// const words_as_numbers = ["11232","121232","11111"]
const words_as_numbers = ["11232","1123123213","11232", "112333913", "1123122"]
let finalRes = words_as_numbers[0] ;
for(let i = 1; i < words_as_numbers.length ; i++) finalRes = findLongestPrefix(finalRes, words_as_numbers[i])

console.log(finalRes)