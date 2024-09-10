import Image from 'next/image'
import classes from './playground.module.css'

import heroImage from '../../assets/playground/hero-img.png'

import heroCube1 from '../../assets/playground/herocube1.png'
import heroCube2 from '../../assets/playground/herocube2.png'
import heroCube3 from '../../assets/playground/herocube3.png'
import heroCube4 from '../../assets/playground/herocube4.png'

import AngMgmtLogo from '../../assets/playground/AngerManagement.svg'
import YoutubeIcon from '../../assets/playground/YouTube.svg'
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





import imageDummy from '../../assets/playground/imagedummy.svg'
import Typewriter from 'typewriter-effect'

export default function playground() {


  return (
    <section className={classes.playground}>

      {/* Hero Section */}
      <header className={classes.hero}>
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
          {/* <h1>Making Beats, Barz, and Beatingss</h1> */}
        </div>
        <div className={classes.heroImageArea}>
          <Image src={heroImage} width="auto" alt='hero-img' />
          <div className={`${classes.herocube} ${classes.herocube_1}`}>
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
          </div>
        </div>
      </header>

      {/* Description */}
      <article className={classes.description}>
        <section className={classes.descriptionHeading}>
          <h2>1M Monthly Listeners &amp; Counting...</h2>
        </section>
        <section className={classes.descriptionText}>
          <p>
            Born and raised in Abuja, Nigeria, Bloody Civilian is a genre-defying singer, whose penchant for storytelling manifests in her authentic, unbridled, and poetic lyricism.
          </p>
        </section>
      </article>

      {/* Links */}
      <section className={classes.socials}>
        <div>
          <Image src={AngMgmtLogo} alt='album-icon' />
        </div>
        <div className="">
          <Image src={YoutubeIcon} alt='yt-icon' />
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
      </section>

      {/* Music */}
      <section className={classes.music}>
        <Image src={VolumeImage} className={classes.volumeknob} alt='volume-knob' />
        <Image src={headphonesImage} className={classes.headphones} alt='headphones' />
        <Image src={randomguyImage} className={classes.randomman} alt='random man' />
      </section>


      {/* Quotes */}
      <article className={classes.quote}>
        <section className={classes.quoteHeadline}>
          <h1>&quot;In Her Words&quot;</h1>
          <Image src={QuoteBubble} alt='text bubble' />
          <Image src={BloodyCar} alt='bloody civ' />
        </section>
        <section className={classes.actualQuote}>
          <p>“I love writing stories and telling stories and sharing what is on my mind without consequences”</p>
          <Image src={cryingTyler} alt='tylerthecreator' />
        </section>
      </article>

      {/* Media Section */}
      <article className={classes.media}>
        <h1>See for yourself..</h1>
        <div className="">
          <Image src={imageDummy} alt='image-placeholder' />
          <iframe
            className={classes.iframeContainer}
            src="https://www.youtube.com/embed/dZQ8Y-to83Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

      </article>

      {/* Image Gallery */}
      <section className={classes.imageGallery}>
        <div className={classes.firstRow}>
          <Image src={RopePic1} alt='bloody civ holding a rope' />
          <Image src={BloodyRed} alt='3 people standing' />
          <Image src={RopePic2} alt='bloody civ holding a rope' />
        </div>
        {/* <div className=""> */}
        <Image src={BloodyClones} alt='bloody holding a guitar' />
        {/* </div> */}
      </section>


    </section>
  )
}


