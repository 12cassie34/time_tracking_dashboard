# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Development Note](#development-note)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

To be added.
![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/12cassie34/time_tracking_dashboard)
- Live Site URL: [Github Pages](https://12cassie34.github.io/time_tracking_dashboard/)

## My process

### Built with

- [Vue](https://vuejs.org/) - JS library - Vue 3
- [Pinia](https://pinia.esm.dev/) - Vue framework of store library
- [Tailwind CSS](https://tailwindcss.com/) - For styles

### What I learned

- Use Vue 3 to handle `props` from a parent component in setup phase
- Use Tailwind CSS for styles
- Use Pinia to store data

### Development Note
#### [20211122 Time Tracking Dashboard](https://hackmd.io/@12Cassie34/SkPfmcOOK)
- Initialize Vue 3 + vite project.
- Add base style setting of color and font in `tailwind.config.js`.

#### [20211122 Time Tracking Dashboard](https://hackmd.io/@12Cassie34/HJJUOEF_Y)
- Encounter `border-color` does not work. The problem is caused by overriding default Tailwind colors by putting colors directly into `theme.colors`. We should put our custom color setting in `extend`.
```js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "hsl(15, 100%, 70%)",
      },
      fontFamily: {
        rubik: ['"Rubik"'],
      },
    },
  }
};
```
#### [2021215 Time Tracking Dashboard](https://hackmd.io/@12Cassie34/SkfhpQvcY)
- After running npm run build, some images did not reveal. Problem solved!
```js
  mounted() {
    this.$nextTick(function () {
      const imgUrl = new URL(
        `../assets/${this.props.title}.svg`,
        import.meta.url
      ).href;

      document.getElementById(`img-${this.props.title}`).src = imgUrl;
    });
  },
```

#### [2021215 Time Tracking Dashboard](https://hackmd.io/@12Cassie34/SyHb5ZPcK)
- Deploy my project on Github Pages.


### Continued development
- I found Tailwind CSS is powerful when it comes to building a pretty website. It takes time to be familiar with plenty of class names. I will keep using it in other projects.
- As a Vue guy, I will keep learning Vue 3.
- Pinia is good, but I'd prefer to use Vuex instead.

### Useful resources

- [Border color doesn't work in Tailwind CSS](https://stackoverflow.com/questions/68320264/border-color-doesnt-work-in-tailwind-css) - The answer in this post saves my day when I try to figure out why my `border-white` does not work.
- [Creating vite vue ts template: Deploy to Github Pages](https://dev.to/imomaliev/creating-vite-vue-ts-template-deploy-to-github-pages-4c88) - Clear instruction for deploying your Vue 3 + vite project on Github Pages. But don't forget to check vite's documents about deploying beforehand!
- [CodePen Home
CSS filter generator to convert from black to target hex color](https://codepen.io/sosuke/pen/Pjoqqp) - When it comes to changing a SVG image's color, I will recommend this site to get a right `filter`'s setting.

## Author

- Website - [Cassie](https://medium.com/@cassiecoding)
- Frontend Mentor - [@12cassie34](https://www.frontendmentor.io/profile/12cassie34)

## Acknowledgments
