const reverso = (word:string):string => {
    const wordReverse = word.split("").reverse().join(" ").toUpperCase()
    return wordReverse
}
console.log(reverso("roma"))