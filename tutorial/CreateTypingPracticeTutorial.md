
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
