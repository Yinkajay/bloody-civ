import classes from './playground.module.css';

export default function Playground() {
  return (
    <section className={classes.playground}>
        
      {/* Hero Section */}
      <header className={classes.hero}>
        <div className={classes.heroText}>
          <h1>Making Beats, Barz, and Beatingss</h1>
        </div>
        <div className={classes.heroImage}>
          <img src='' alt='' />
        </div>
      </header>

      {/* Description */}
      <article className={classes.description}>
        <section>
          <h2>1M Monthly Listeners & Counting...</h2>
        </section>
        <section>
          <p>
            Born and raised in Abuja, Nigeria, Bloody Civilian is a genre-defying singer, whose penchant for storytelling manifests in her authentic, unbridled, and poetic lyricism.
          </p>
        </section>
      </article>

      {/* Quotes and Images */}
      <article className={classes.quotesAndImages}>
        <section>
          <h1></h1>
          <img src='' alt='' />
        </section>
        <section>
          <p>“I love writing stories and telling stories and sharing what is on my mind without consequences”</p>
          <img src='' alt='' />
        </section>
      </article>

      {/* Media Section */}
      <article className={classes.media}>
        <img src='' alt='' />
        <video src='' controls></video>
        <div>
          <img src='' alt='' />
          <p>PRESS PLAY</p>
        </div>
      </article>

      {/* Image Gallery */}
      <div className={classes.imageGallery}>
        {/* Images */}
      </div>
    </section>
  );
}
