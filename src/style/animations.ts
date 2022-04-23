export const usersCardContainer = {
  hidden: { opacity: 0, y: '100%' },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.6, 0.66, 0.04, 1]
    }
  },
  exit: {
    opacity: 0,
    y: '100%',
    transition: {
      duration: 0.3,
      ease: [0.6, 0.66, 0.04, 1]
    }
  }
}

export const usersCardHeader = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7
    }
  }
}
export const usersCardTagline = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7
    }
  }
}
export const usersCardList = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.66, 0.04, 1]
    }
  }
}
export const usersCardFooter = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1.4,
      duration: 0.7,
      ease: [0.6, 0.66, 0.04, 1]
    }
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] }
  }
}

export const containerOpacityAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.6, 0.66, 0.04, 1] }
  }
}
