import Image from "next/image";

import visualStyles from './visuals.module.css'

import leftarrow from '../../assets/visuals/leftarrow.svg'
import rightarrow from '../../assets/visuals/rightarrow.svg'
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
                {musicVideos.map(video => (
                    <div key={video.etag} className={visualStyles.mvCard}>
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
                ))}
                {/* {vlogVideos.map(video => (
                    <p key={video.etag}>{video?.snippet?.title}</p>
                ))} */}
            </section>
            <section>
                <h1>Vlog & Live</h1>
                <div className="">

                </div>
                <div className="">
                    <Image src={''} alt="" />
                </div>
            </section>

            <section>
                <h1>Vlog & Live</h1>
                <div className="">

                </div>
            </section>
        </section>
    )
}


