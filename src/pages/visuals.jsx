import Image from "next/image";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import visualStyles from './visuals.module.css'

import forward from '../../assets/discography/forward.svg'
import backward from '../../assets/discography/backward.svg'
import { fetchYouTubeMusicData, fetchYoutubeVlogData } from "@/utils/fetchYoutubeData";


export async function getStaticProps() {
    // Fetch YouTube data for both music and vlogs at build time
    const musicVideos = await fetchYouTubeMusicData();
    // const vlogVideos = await fetchYoutubeVlogData();

    console.log(musicVideos)

    // Return the fetched data as props to the page
    return {
        props: {
            musicVideos,
            // vlogVideos,
        },
        // Optional: revalidate every 24 hours (or other time interval in seconds)
        revalidate: 86400, // 24 hours in seconds
    };
}


export default function visuals({ musicVideos, vlogVideos }) {
    console.log('Music Videos:', musicVideos);
    // console.log('Vlog Videos:', vlogVideos);
    return (
        <section>
            <section>
                <h1>Visuals, <span></span></h1>
                <h1>BLOODY CIVILIAN</h1>
                <Image src={''} alt="" />
                <p></p>
            </section>

            <section>
                <h2>Music Videos</h2>
                <Splide className={visualStyles.mvCarousel} hasTrack={false} options={{ perPage: 1.2, gap: '4rem', pagination: false, focus: 0 }}
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
            </section>

            <section className={visualStyles.vlogs}>
                <h1>Vlog & Live</h1>
                <div className="">

                </div>
            </section>
        </section>
    )
}


