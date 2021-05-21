import React, { useState, useEffect} from "react";
import gsap from "gsap";
import Hero from "./Hero";
import Feature from "./Feature";
import Skills from './Skills';
import Portfolio from './Portfolio';
import ScrollTop from './ScrollTop';

let tl = gsap.timeline();
const heroAnimation = (completeAnimation) => {
  tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: 'Power4.easeOut'
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: 'Power4.easeOut',
    duration: 2
}, "-=1.5")
tl.from('.hero-design', {
    opacity: 0, y: 50, ease: 'Power4.easeOut', duration: 1
}, "-=2")

gsap.from(".square-anim", {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: 'Back.easeOut.config(1.7)'
})

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});
}

const MainContent = () => {
  const [ setAnimationComplete ] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true)
  }

  useEffect(() => {
    heroAnimation(completeAnimation);
  });
  
  return (
    <div>
      <Hero />
      <Feature />
      <Skills />
      <Portfolio />
      <ScrollTop />
    </div>
  );
};

export default MainContent;
