gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
  })

  // настройка хедера (непрозрачность при скролле)
  gsap.fromTo('.header-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header-section',
      start: 'center',
      end: '800',
      scrub: true
    }
  })

  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item')
  let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item')

  itemsLeft.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: -50 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-900',
        end: '-100',
        scrub: true,
      }
    })
  })

  itemsRight.forEach(item => {
    gsap.fromTo(item, { opacity: 0, x: 50 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-700',
        end: 'top',
        scrub: true,
      }
    })
  })

}