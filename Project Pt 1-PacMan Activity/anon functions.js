function createSentence(sentence)
{
    let arrayOfWords = sentence.split(" ");
    console.log(arrayOfWords);
}("it will split an array when there are spaces");



let creatingLoops = (x) => {
    for (let i = 0; i < x; i++) {
        console.log(i);
   }

}
creatingLoops(20);