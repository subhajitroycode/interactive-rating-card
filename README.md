# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](https://user-images.githubusercontent.com/72935263/160867794-8fcac908-f15b-49d3-9def-2b0d94b4a286.png) 
![](https://user-images.githubusercontent.com/72935263/160867638-b34ff910-b380-4b33-b009-fcc3a5d29549.png)

### Links

- Solution URL: [Click Me!](https://www.frontendmentor.io/solutions/interactive-rating-card-using-javascript-SyWXQZM75)
- Live Site URL: [Click Me!](https://subhajitroycode.github.io/interactive-rating-card/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS/SASS
- Positioning and sizing of elements
- Form validation/submission
- JavaScript


### What I learned

I've learned about `URLSearchParams`, and how to use them to pass data from one page to another. I've also learned about the use of the `get` method on the `window` object to get the URL parameters. Also use the `@use` directive to import components from other files. 


```js
const rating = document.querySelector(".rating");
const value = new URLSearchParams(window.location.search).get("ratings");
rating.textContent = `You selected ${value} out of 5`;
```


### Continued development

I am looking forward to improve my JavaScript skills and learn more about the DOM. I am also looking forward to learning more about the use of the `@use` and `@forward` directives.

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) - MDN documentation for the `URLSearchParams` object
- [Youtube - Web Dev Simplified](https://www.youtube.com/watch?v=fNcJuPIZ2WE) - This video is about HTML forms but it helped me about the `URLSearchParams` object


## Author

- Frontend Mentor - [@subhajitroycode](https://www.frontendmentor.io/profile/subhajitroycode)
- Twitter - [@subhajitroycode](https://www.twitter.com/subhajitroycode)
- LinkedIn - [@subhajitroycode](https://www.linkedin.com/in/subhajitroycode)


## Acknowledgments

I got a tip when submitting the form check if any of the radio buttons selected or show an error message. It was a great tip and I tried to find that account but couldn't find it.
