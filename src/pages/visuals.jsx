import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import visualStyles from './visuals.module.css'
import {motion} from "motion/react"
import { fadeUp } from '../utils/animationVariants'

import bioPicture from '../../assets/biography/bioPicture.svg'
import visual from '../../assets/visuals/visual.svg'

import forward from '../../assets/discography/forward.svg'
import backward from '../../assets/discography/backward.svg'
import { fetchYouTubeMusicData, fetchYoutubeVlogData } from "@/utils/fetchYoutubeData";


export async function getStaticProps() {
    // Fetch YouTube data for both music and vlogs at build time
    const musicVideos = await fetchYouTubeMusicData();
    const vlogVideos = await fetchYoutubeVlogData();

    console.log(musicVideos)

    // Return the fetched data as props to the page
    return {
        props: {
            musicVideos,
            vlogVideos,
        },
        // Optional: revalidate every 24 hours (or other time interval in seconds)
        revalidate: 86400, // 24 hours in seconds
    };
}

const pageVariants = {
    initial: {
      clipPath: 'inset(100% 0% 0% 0%)',
      opacity: 0
    },
    animate: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1]
      }
    },
    exit: {
      clipPath: 'inset(0% 0% 100% 0%)',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }


export default function visuals({ musicVideos, vlogVideos }) {
    console.log('Music Videos:', musicVideos);
    console.log('Vlog Videos:', vlogVideos);
    return (
        <motion.section className={visualStyles.visualsPage} variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <motion.section className={visualStyles.hero} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
                <h1>Visuals, <span></span></h1>
                <h1>BLOODY CIVILIAN</h1>
                <div className={visualStyles.heroImageArea}>
                    <Image src={bioPicture} alt="" />
                    <Image src={visual} alt="" />
                </div>
                <p>Look so fly in front of the camera</p>
            </motion.section>

            <motion.section className={visualStyles.videos} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
                <h2>Music Videos</h2>
                <Splide className={visualStyles.mvCarousel} hasTrack={false} options={{ perPage: 1.2, breakpoints: { 650: { perPage: 1 } }, gap: '4rem', pagination: false, focus: 0 }}
                >
                    <SplideTrack> 
                        {musicVideos.map(video => (
                            <SplideSlide key={video.etag}>
                                <div className={visualStyles.mvCard}>
                                    <div className={visualStyles.titleSlider}>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                    </div>
                                    <div className={visualStyles.mvCardVideo}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                            title={video.snippet.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                        {/* <Image width={1000} height={700} src={video.snippet.thumbnails.high.url} alt="youtube video thumbnail" /> */}
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <div className={`splide__arrows ${visualStyles.arrowsContainer}`}>
                        <button className="splide__arrow splide__arrow--next">
                            <Image width={120} src={backward} />
                        </button>
                        <button className="splide__arrow splide__arrow--prev">
                            <Image width={120} src={forward} />
                        </button>
                    </div>
                </Splide>


                {/* {vlogVideos.map(video => (
                    <p key={video.etag}>{video?.snippet?.title}</p>
                ))} */}
            </motion.section>

            <motion.section className={visualStyles.vlogs} variants={fadeUp}  initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
                <h2>Vlog & Live</h2>
                <Splide className={visualStyles.mvCarousel} hasTrack={false} options={{ perPage: 1.2, breakpoints: { 650: { perPage: 1 } }, gap: '4rem', pagination: false, focus: 0 }}
                >
                    <SplideTrack>
                        {vlogVideos.map(video => (
                            <SplideSlide key={video.etag}>
                                <div className={visualStyles.mvCard}>
                                    <div className={visualStyles.titleSlider}>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                        <p>{video.snippet?.title}</p>
                                    </div>
                                    <div className={visualStyles.mvCardVideo}>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                            title={video.snippet.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                        {/* <Image width={1000} height={700} src={video.snippet.thumbnails.high.url} alt="youtube video thumbnail" /> */}
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <div className={`splide__arrows ${visualStyles.arrowsContainer}`}>
                        <button className="splide__arrow splide__arrow--next">
                            <Image width={120} src={backward} />
                        </button>
                        <button className="splide__arrow splide__arrow--prev">
                            <Image width={120} src={forward} />
                        </button>
                    </div>
                </Splide>
            </motion.section>
        </motion.section>
    )
}


