import Image from 'next/image'
import classes from './playground.module.css'
import { motion } from "motion/react"

import heroImage from '../../assets/playground/hero-img.png'

import heroCube1 from '../../assets/playground/herocube1.png'
import heroCube2 from '../../assets/playground/herocube2.png'
import heroCube3 from '../../assets/playground/herocube3.png'
import heroCube4 from '../../assets/playground/herocube4.png'

import AngMgmtLogo from '../../assets/playground/AngerManagement.svg'
import YoutubeLogo from '../../assets/playground/Youtube.svg'
import GuitarImage from '../../assets/playground/Guitar.svg'
import SpotifyIcon from '../../assets/playground/Spotify.svg'
import BloodyCar from '../../assets/playground/BloodySitting.svg'
import SnapchatIcon from '../../assets/playground/Snapchat.svg'
import BloodyPortrait from '../../assets/playground/BloodyPortrait.svg'
import InstagramIcon from '../../assets/playground/Instagram.svg'
import VolumeImage from '../../assets/playground/Volume.svg'
import headphonesImage from '../../assets/playground/headphones.svg'
import randomguyImage from '../../assets/playground/random-guy.svg'
import QuoteBubble from '../../assets/playground/quote-bubble.svg'
import cryingTyler from '../../assets/playground/cryingTyler.svg'
import RopePic1 from '../../assets/playground/BloodyRope1.svg'
import RopePic2 from '../../assets/playground/BloodyRope2.svg'
import BloodyRed from '../../assets/playground/BloodyRed.svg'
import BloodyClones from '../../assets/playground/BloodyGuitarClone.svg'


import collage1 from '../../assets/playground/collage1.svg'
import collage2 from '../../assets/playground/collage2.svg'

import musicImg from '../../assets/playground/musicImg.svg'
import musicImg2 from '../../assets/playground/musicImg2.svg'


import imageDummy from '../../assets/playground/imagedummy.svg'
import Typewriter from 'typewriter-effect'


// const pageVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
// };

const pageVariants = {
  initial: { opacity: 0, rotate: -3, scale: 0.98 },
  animate: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
  },
  exit: {
    opacity: 0,
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.4, ease: 'easeInOut' }
  }
}


export default function playground() {


  return (
    <motion.section className={classes.playground}  variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit">

      {/* Hero Section */}
      <motion.header className={classes.hero} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.7 }}>
        <div className={classes.heroTextArea}>
          <h1>
            Making&nbsp;
            <Typewriter
              options={{
                strings: [
                  "Beats",
                  "Barz",
                  "Beatings"
                ],
                autoStart: true,
                loop: true
              }}
            />
          </h1>
        </div>
        <div className={classes.heroImageArea}>
          <Image src={heroImage} width="auto" alt='hero-img' />
          {[heroCube1, heroCube2, heroCube3, heroCube4].map((cube, index) => (
            <div
              key={index}
              className={`${classes.herocube} ${classes[`herocube_${index + 1}`]}`}
            >
              <Image src={cube} alt="hero-img" />
            </div>
          ))}
          {/* <div className={`${classes.herocube} ${classes.herocube_1}`}>
            <Image src={heroCube1} alt="hero-img" />
          </div>
          <div className={`${classes.herocube} ${classes.herocube_2}`}>
            <Image src={heroCube2} alt="hero-img" />
          </div>
          <div className={`${classes.herocube} ${classes.herocube_3}`}>
            <Image src={heroCube3} alt="hero-img" />
          </div>
          <div className={`${classes.herocube} ${classes.herocube_4}`}>
            <Image src={heroCube4} alt="hero-img" />
          </div> */}
        </div>
      </motion.header>

      {/* Description */}
      <motion.article className={classes.description} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <section className={classes.descriptionHeading}>
          <h2>1M Monthly Listeners &amp; Counting...</h2>
        </section>
        <section className={classes.descriptionText}>
          <p>
            Born and raised in Abuja, Nigeria, Bloody Civilian is a genre-defying singer, whose penchant for storytelling manifests in her authentic, unbridled, and poetic lyricism.
          </p>
        </section>
      </motion.article>

      {/* Links */}
      {/* <section className={classes.socials}>
        <div>
          <Image src={AngMgmtLogo} alt='album-icon' />
        </div>
        <div className="">
          <Image src={YoutubeLogo} alt='yt-icon' />
        </div>
        <div className="">
          <Image src={GuitarImage} alt='bloody-civ' />
        </div>
        <div className="">
          <Image src={SpotifyIcon} alt='spotify' />
        </div>
        <div className="">
          <Image src={BloodyCar} alt='bloody-civ' />
        </div>
        <div className="">
          <Image src={SnapchatIcon} alt='snapchat' />
        </div>
        <div className="">
          <Image src={BloodyPortrait} alt='bloody-civ' />
        </div>
        <div className="">
          <Image src={InstagramIcon} alt='instagram' />
        </div>
      </section> */}

      <motion.section className={classes.socials} initial="hidden" whileInView="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
        {[AngMgmtLogo, YoutubeLogo, GuitarImage, SpotifyIcon, BloodyCar, SnapchatIcon, BloodyPortrait, InstagramIcon].map((icon, i) => (
          <motion.div key={i} variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.1 }}>
            <Image src={icon} alt='icon' />
          </motion.div>
        ))}
      </motion.section>

      {/* Music */}
      <motion.section className={classes.music} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <Image className={classes.musicDesktop} src={musicImg} alt='music-img' />
        <Image className={classes.musicDesktop2} src={musicImg2} alt='music-img2' />
      </motion.section>


      {/* Quotes */}
      <motion.article className={classes.quote} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <section className={classes.quoteHeadline}>
          <h2 className={classes.headline}>
            <span>&quot;In Her Words&quot;</span>
            <span className={classes.imageContainer}>
              <Image src={QuoteBubble} alt="text bubble" />
              <Image src={BloodyCar} alt="bloody civ" />
            </span>
          </h2>
        </section>
        <section className={classes.actualQuote}>
          <p>“I love writing stories and telling stories and sharing what is on my mind without consequences”</p>
          <Image src={cryingTyler} alt='tylerthecreator' />
        </section>
      </motion.article>

      {/* Media Section */}
      <motion.article className={classes.media} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2>See for yourself..</h2>
        <div>
          <Image src={imageDummy} alt='image-placeholder' />
          <iframe
            className={classes.iframeContainer}
            src="https://www.youtube.com/embed/dZQ8Y-to83Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.article>

      {/* Image Gallery */}
      <motion.section className={classes.imageGallery} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Image src={collage1} alt='collage1' />
        <Image src={collage2} alt='collage2' />
      </motion.section>


    </motion.section>
  )
}


