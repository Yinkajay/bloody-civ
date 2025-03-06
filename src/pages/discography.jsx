import discographyStyles from './discography.module.css'
import Image from 'next/image'

import spotify from '../../assets/discography/Spotify.svg'
import youtube from '../../assets/discography/Youtube.svg'
import tidal from '../../assets/discography/Tidal.svg'
import soundcloud from '../../assets/discography/Soundcloud.svg'
import deezer from '../../assets/discography/Deezer.svg'

import forward from '../../assets/discography/forward.svg'
import backward from '../../assets/discography/backward.svg'

import headphones from '../../assets/discography/headphones.svg'
import AngerManagement from '../../assets/discography/AngerManagement.svg'
import Atleastwetried from '../../assets/discography/atleastwetried.svg'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import "@splidejs/splide/css";

import bioPicture from '../../assets/biography/bioPicture.svg'
import megaphone from '../../assets/biography/megaphone.svg'
import headsets from '../../assets/discography/headsets.svg'



export default function discography() {

    const albums = [
        {
            image: AngerManagement,
            title: 'Anger Management',
            year: '2023',
            links: [],
        },
        {
            image: Atleastwetried,
            title: 'Anger Management: At LEasT wE tRIED',
            year: '2023',
            links: []
        }
    ]

    const singlesandFeatures = [
        {
            image: AngerManagement,
            title: 'BLOOD ON THE DANCE FLOOR',
            year: '2023',
            links: []
        },
        {
            image: AngerManagement,
            title: 'Mad Apology',
            year: '2023',
            links: []
        },
        {
            image: AngerManagement,
            title: 'Escapism',
            year: '2023',
            links: []
        },
        {
            image: AngerManagement,
            title: 'How To Kill A Man',
            year: '2023',
            links: []
        },
        {
            image: AngerManagement,
            title: 'Wake Up',
            year: '2023',
            links: []
        },

    ]

    return (
        <section>
            <div className={discographyStyles.discographyHero}>
                <div className={discographyStyles.servicesHeader}>
                    <h2>Tapes,</h2>
                    <div className="">
                        <Image src={spotify} alt='spotify' />
                        <Image src={youtube} alt='youtube' />
                        <Image src={tidal} alt='tidal' />
                        <Image src={soundcloud} alt='soundcloud' />
                        <Image src={deezer} alt='deezer' />
                    </div>
                </div>
                <h2>BLOODY CIVILIAN</h2>
                <div className={discographyStyles.heroImageArea}>
                    <Image src={bioPicture} alt="" />
                    <Image src={headsets} alt="" />
                </div>
                <p>One of the best in the game, <br /> don’t believe, play a tape.</p>
            </div>

            <div className={discographyStyles.albums}>
                <h2>Albums & EPs</h2>
                <Splide className={discographyStyles.albumsCarousel} hasTrack={false} options={{ perPage: 1.2, gap: '4rem', pagination: false, focus:0, breakpoints:{
                    450: {gap: '2rem'}
                } }}
                >
                    <SplideTrack>
                        {albums.map((album, index) => (
                            <SplideSlide key={index}>
                                <div className={discographyStyles.albumCard}>
                                    <div className="">
                                        <Image src={album.image} width={500} className={discographyStyles.albumImage} alt='anger management' />
                                        <div className={discographyStyles.albumText}>
                                            <div className={discographyStyles.albumYear}>
                                                <p>Album</p>
                                                <p>{album.year}</p>
                                            </div>
                                            <h1>{album.title}</h1>
                                        </div>
                                    </div>
                                    <Image src={headphones} className={discographyStyles.headphonesImage} alt='headphones' />
                                    <div className="">
                                        <Image src={spotify} alt='spotify' />
                                        <Image src={youtube} alt='youtube' />
                                        <Image src={tidal} alt='tidal' />
                                        <Image src={soundcloud} alt='soundcloud' />
                                        <Image src={deezer} alt='deezer' />
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>

                    <div className={`splide__arrows ${discographyStyles.arrowsContainer}`}>
                        <button className="splide__arrow splide__arrow--next">
                            <Image width={120} src={backward} />
                        </button>
                        <button className="splide__arrow splide__arrow--prev">
                            <Image width={120} src={forward} />
                        </button>
                    </div>
                </Splide>
            </div>

            <div className={discographyStyles.singles}>
                <h2>Singles & Featuress</h2>
                <Splide className={discographyStyles.albumsCarousel} hasTrack={false} options={{ perPage: 1.2, gap: '4rem', pagination: false, focus:0, breakpoints:{
                    450: {gap: '2rem'}
                } }}
                >
                    <SplideTrack>
                        {singlesandFeatures.map((album, index) => (
                            <SplideSlide key={index}>
                                <div className={discographyStyles.albumCard}>
                                    <div className="">
                                        <Image src={album.image} width={500} className={discographyStyles.albumImage} alt='anger management' />
                                        <div className={discographyStyles.albumText}>
                                            <div className={discographyStyles.albumYear}>
                                                <p>Album</p>
                                                <p>{album.year}</p>
                                            </div>
                                            <h1>{album.title}</h1>
                                        </div>
                                    </div>
                                    <Image src={headphones} className={discographyStyles.headphonesImage} alt='headphones' />
                                    <div className="">
                                        <Image src={spotify} alt='spotify' />
                                        <Image src={youtube} alt='youtube' />
                                        <Image src={tidal} alt='tidal' />
                                        <Image src={soundcloud} alt='soundcloud' />
                                        <Image src={deezer} alt='deezer' />
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>

                    <div className={`splide__arrows ${discographyStyles.arrowsContainer}`}>
                        <button className="splide__arrow splide__arrow--next">
                            <Image width={120} src={backward} />
                        </button>
                        <button className="splide__arrow splide__arrow--prev">
                            <Image width={120} src={forward} />
                        </button>
                    </div>
                </Splide>
            </div>
        </section>
    )
}


