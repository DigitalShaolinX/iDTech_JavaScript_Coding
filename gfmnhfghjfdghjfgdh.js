let counter = 10;
function countdown()
{
    if(counter > 0){
        console.log(counter)
        counter--;
    }
}

let id = setInterval(countdown, 1000);
if(counter == 0)
{
    clearInterval(id);
}
