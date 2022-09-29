//Exercise 1
function capFirstWord(sentence){
    let singleWord = sentence.split(" ");
    for (let i = 0; i < singleWord.length; i++){
        singleWord[i] = singleWord[i][0].toUpperCase() + singleWord[i].substring(1);
    }
    
    let upperSentence =singleWord.join(" ");
    console.log(upperSentence);
}

capFirstWord("my name is shakil")

//exercise 2
function biggestNum(num1,num2,num3){
    let biggest = Math.max(num1,num2,num3);
    console.log(biggest)

}
biggestNum(2,4,8)

//exercise 3
function lastThree(word){
    return word.slice(-3) + word.slice(0,-3);
    
}
console.log(lastThree("Shakil"));

//exercise 4
function angle(num){
    if(num < 90){
        return "The angle is acute"
    }
    else if(num == 90){
        return "This is a right angle"
    }
    else if(num < 180 && num > 90){
        return "this is an obtuse angle"
    }
    else if(num = 180){
        return "this is an straight angle"
    }

}
console.log(angle(180))

