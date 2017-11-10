import animateScroll from 'scrollto-with-animation'

export const scrollTo = (pos, duration = 750) => new Promise(resolve => {
  animateScroll(document.documentElement, 'scrollTop', pos, duration, 'easeInOutSine', resolve)
})

export const kebabify = (words) =>
  words
    .toLowerCase()
    .replace(' ', '-')

export const separateDash = (name) =>
  name.split("-")
    