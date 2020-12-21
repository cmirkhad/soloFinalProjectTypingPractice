const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const WpmElement = document.getElementById('wpm')

let stop = true;
quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    
    const arrayValue = quoteInputElement.value.split('')
    let correct= true;
    arrayQuote.forEach((ch, index) => {
    const character = arrayValue[index]
    
    if(character == null){
        ch.classList.remove('incorrect')
        ch.classList.remove('correct')
        correct = false;
    }
    else if(character === ch.innerText){
        ch.classList.add('correct')
        ch.classList.remove('incorrect')
    }else{
        ch.classList.remove('correct')
        ch.classList.add('incorrect')
        correct = false;
        
        
    }
    })
    
    if(getTimerTime()!=0)WpmElement.innerText=Math.round(arrayValue.length/(getTimerTime()/60)/5)+ " wpm"
    if(arrayQuote.length==arrayValue.length && correct) {
        quoteInputElement.disabled = true
        stop =true;
        $("#finished").html("Finished!")
        $("#finished").css("color","green")
    }
  
})



function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content)
    
}

 
async function renderNewQuote(){
    $("#finished").html("")
    quoteInputElement.disabled = false
    const quote = await getRandomQuote()
    $("h3").html("")
     quoteDisplayElement.innerHTML = ''
     quote.split('').forEach(character =>{
         const ch = document.createElement('span')
         ch.innerText = character
         quoteDisplayElement.appendChild(ch)
     })
     quoteInputElement.value = null
     WpmElement.innerText="0 wpm"
     stop=true;
     timerElement.innerText = 0+ " sec"
     start=true;

}





let startTime
function startTimer(){
      
    
      stop=false;
      startTime = new Date()
      
      setInterval(() => {
            if(!stop) timerElement.innerText = getTimerTime()+ " sec"
          , 1000})
}
function getTimerTime(){
    return Math.floor((new Date() - startTime)/1000)
}


$("#nextbtn").click( function(){
    
    renderNewQuote();
})
start=true;
$("#quoteInput").keydown(function(e){
    if(start) {
        startTimer();
        start=false;
    }
})


function renderAlaTooText(index){
    $("#alatoo").append("<li id="+index+"alatoo"+"><a href=\"#\">"+data.texts[index].description+"</a></li>")
    $("#"+index+"alatoo").click(function(){
        
    quoteInputElement.disabled = false
    const quote = data.texts[index].content;
    $("h3").html(data.texts[index].description)
     quoteDisplayElement.innerHTML = ''
     quote.split('').forEach(character =>{
         const ch = document.createElement('span')
         ch.innerText = character
         quoteDisplayElement.appendChild(ch)
     })
     quoteInputElement.value = null
     WpmElement.innerText="0 wpm"
     stop=true;
     timerElement.innerText = 0+ " sec"
     start=true;
    })
}


renderNewQuote();
data.texts.forEach((item, i) => {
    renderAlaTooText(i);
}
); 
$("#funfactsrandom").click(function(){
    $("#finished").html("")
    var ind = Math.floor(Math.random()*fundata.texts.length);
    quoteInputElement.disabled = false
    const quote = fundata.texts[ind].content;
    $("h3").html(fundata.texts[ind].description)
     quoteDisplayElement.innerHTML = ''
     quote.split('').forEach(character =>{
         const ch = document.createElement('span')
         ch.innerText = character
         quoteDisplayElement.appendChild(ch)
     })
     quoteInputElement.value = null
     WpmElement.innerText="0 wpm"
     stop=true;
     timerElement.innerText = 0+ " sec"
     start=true;
    
})


