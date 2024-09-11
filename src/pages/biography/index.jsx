import React from 'react'
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

export default function biography() {
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
          <Image  />
          <Image />
        </div>
      </div>

      <div className={BiographyStyles.preVisuals}>
        <h2>She’s got that finesse</h2>
        <p>“I love writing stories and telling stories and sharing what is on my mind without consequences,” Bloody Civilian says of her expressive experiential music. Initially, delving into the art as a form of poetic expression, Bloody Civilian’s parents were her first audience, to whom she’d write and perform songs, though soon enough she’d take to the public stages of church, talent shows and school performances.</p>
        <p>Her repertoire grew quickly, with the help of Audacity, where a 12-year-old Bloody Civilian began studying music production, which has now evolved into a stunning self-produced debut single “How To Kill A Man.”</p>
      </div>



    </section>
  )
}


