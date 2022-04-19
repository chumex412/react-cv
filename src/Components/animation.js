export const pageAnimation = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: { 
      duration: 1, 
      when: 'beforeChildren',
      staggerChildren: 0.5
    }
  },
}

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" }
  }
}

export const shrink = {
  hidden: { scale: 1.2, opacity: 0},
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' }
  }
} 

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' }
  }
}

export const sectionFade = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const expand = {
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' }
  }
}