
# Tutorial how to create my app
It is pretty simple to create the current application. Let's go through step by step.
## Index.html
First of all, it's required to create index.html and some basic structure inside.
Look at required scripts:
![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/img3.png)
### Body tag
Inside body tag create div with class container. Container has areas for displaying some text and for typing. Below there's also space for some information. It's in div with id info.<br>
![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/img1.png)<br>
You see inside div info three divs with appropriate id. Divs for display and for typing are created the same. Autofocus on input textarea means when the page loads, it will be focus on the textarea.
### Navbar
To create navbar I used the following code:
![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/img2.png)<br>
I will mention important part of this code: div with id alatoo and list with id funfactsrandom. Div is empty, it will be filled by lists by jquery.
List with id funfactsrandom is on the navbar on the top, when you press on the text related to this list, JS code will be implemented.
Navbar's look on top:
![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/webpage.png)<br>

## CSS styling
There is no key thing in CSS styling in my application, it's not important thing for me, except some bootstrap stuff and red/green colors for text in display.<br> There is some code from styles.css:<br>
![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/img4.png)<br>
for class incorrect and correct I used as trivial for touch typing red and green colors:
<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/img5.png)<br>

## JavaScript
Now let's begin with real tutorial:
### Start typing
When webpage has loaded, you will faced up with random text to type. In order to make it, you have to: first - generate texts; second - compare it with typed text in input area.
To generate absolute random text, I used API quote generator from http://api.quotable.io/random. Let's look at the parts of code which read API and extract content(text):
<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/declaringConsts.png)<br>
<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/getquotesimg.png)<br>
In or<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/getquotesimg.png)<br>der to display a quote in the browser, we put it in div with id quote-display. For that, we use the following code:
<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/renderNewQuote.png)<br>
Notice some jquery parts, it's for clearing up unnecessary texts for a next quote. wpm(words per min) and time should start from 0. Stop and start values are true in order to not start while user isn't beginning to type. When user starts typing, timer starts. For that I used jquery:
<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/dontstartwhilenottyping.png)<br>
Timer starts when user starts typing, when user finishes, timer should stop. That's the of stop boolean variable:
<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/Timer.png)<br> While stop is false, timer is working. Otherwise it will stop.
<br>
### Typing process
When you type, text above will start turning green, if you type correctly, else: it will turn to red color. For that I used classed correct and incorrect with appropriate css.
To make this thing properly, I added event listener to inputarea(textArea in html with id quote-input) which is addEventListener. It takes all characters typed in inputArea and compare it with text in diplay. It compares characters with the same index. If characters the same, it will turn green(add class correct, remove class incorrect), otherwise, turn red(opposite). If there is no character in input to compare with remaining characters in display, it will remove both classes from them. Notice, that if you what to emphazise moment, when you correctly finished typing, it should stop timer, wpm, disable inputArea and pop up green finished text. They will be removed when you turn to next quote.
<br>![alt text](https://github.com/cmirkhad/soloFinalProjectTypingPractice/blob/main/tutorial/eventListener.png)<br> 
I used correct boolean variable, which is initialized as true, but when in comparisons there is a dismatch or no character to much, it will turn false. When correct remains true and character arrays for input and display have same length, which means user finished typing correctly. Finished text will pop up above wpm.

## Texts that I added for app and navBar.
