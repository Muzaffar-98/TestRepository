const words = ["level", "radar", "text", "river", "madam", "sales", "mom"];
let palindromesSum = 0;

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isPalindrome = true;

    for (let j = 0; j < word.length / 2; j++) {
        if (word[j] !== word[word.length - 1 - j]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome === true) {
        console.log( words[i], 'is a palindrome.');
        palindromesSum++;
    }
}

console.log("Count of palindromes:", palindromesSum);  


