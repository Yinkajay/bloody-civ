export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  
  export const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };
  
  export const blurZoom = {
    initial: { opacity: 0, filter: 'blur(10px)', scale: 1.02, y:50 },
    animate: {
      opacity: 1,
      y:0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' }
    },
    exit: {
      opacity: 0,
      filter: 'blur(5px)',
      scale: 1.05,
      transition: { duration: 0.4, ease: 'easeInOut' }
    }
  };
  
  export const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  export const fadeItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };