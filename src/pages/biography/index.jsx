import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import BiographyStyles from './index.module.css'

import bioImage from '../../../assets/biography/bioPicture.svg'
import megaphone from '../../../assets/biography/megaphone.svg'
import videoThumb from '../../../assets/biography/videoThumb.svg'

import Youtube from '../../../assets/biography/Youtube.svg'
import Snapchat from '../../../assets/biography/Snapchat.svg'
import Instagram from '../../../assets/biography/Instagram.svg'
import Twitter from '../../../assets/biography/Twitter.svg'
import Pencil from '../../../assets/biography/Pencil.svg'

import slide1 from '../../../assets/biography/slide1.svg'
import slide2 from '../../../assets/biography/slide2.webp'

export default function Biography() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2]; // Add more images as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 1000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <section>

      <header className={BiographyStyles.hero}>
        <h2>EMOSEH KHAMOFU, BLOODY CIVILIAN</h2>
        <div className={BiographyStyles.heroImageArea}>
          <Image src={bioImage} className={BiographyStyles.firstHeroImage} />
          <Image src={megaphone} className={BiographyStyles.secondHeroImage} />
        </div>
        <p>Nigerian singer-songwriter <br /> and record producer</p>
      </header>

      <div className={BiographyStyles.videoArea}>
        <Image src={videoThumb} />
        <p>Born and raised in Abuja, Nigeria, Bloody Civilian is a genre-defying singer, whose penchant for storytelling manifests in her authentic, unbridled, and poetic lyricism. Bloody Civilian grew up in a supportive family system, to a mother who was medical doctor and an engineer father, who played the bass guitar with his band in the ‘80s. Biologically the first born, Bloody Civilian’s household included many older siblings, and with this background the singer, songwriter and producer gained exposure to a broad range of musical tastes.
        </p>
      </div>

      <div className={BiographyStyles.randomArea}>
        <div>
          <div>
            <Image src={Youtube} />
            <Image src={Snapchat} />
            <Image src={Instagram} />
            <Image src={Twitter} />
          </div>
          <Image src={Pencil} />
        </div>
        <div>
          <Image />
        </div>
      </div>

      <div className={BiographyStyles.preVisuals}>
        <h2>She’s got that finesse</h2>
        <p>“I love writing stories and telling stories and sharing what is on my mind without consequences,” Bloody Civilian says of her expressive experiential music. Initially, delving into the art as a form of poetic expression, Bloody Civilian’s parents were her first audience, to whom she’d write and perform songs, though soon enough she’d take to the public stages of church, talent shows and school performances.</p>
        <p>Her repertoire grew quickly, with the help of Audacity, where a 12-year-old Bloody Civilian began studying music production, which has now evolved into a stunning self-produced debut single “How To Kill A Man.”</p>
      </div>

      <div className={BiographyStyles.visuals}>
        <div className={BiographyStyles.visualslider}>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
          <p>Visuals</p>
        </div>
        <div className={BiographyStyles.slideshow}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${BiographyStyles.slide} ${index === currentSlide ? BiographyStyles.active : ''}`}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
              }}
            >
              <Image src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          <Image />
        </div>
      </div>


      <div className={BiographyStyles.outro}>
        <p>A storyteller before anything, a driving force of Bloody Civilian’s work is to empower and platform African art. Bloody Civilian hopes that her career will be marked by her distinct dedication to uplifting her African culture and heritage in every space she encounters.</p>
      </div>


    </section>
  )
}


