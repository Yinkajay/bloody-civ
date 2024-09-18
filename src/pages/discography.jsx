import discographyStyles from './discography.module.css'
import Image from 'next/image'

import spotify from '../../assets/discography/Spotify.svg'
import youtube from '../../assets/discography/Youtube.svg'
import tidal from '../../assets/discography/Tidal.svg'
import soundcloud from '../../assets/discography/Soundcloud.svg'
import deezer from '../../assets/discography/Deezer.svg'

import headphones from '../../assets/discography/headphones.svg'
import AngerManagement from '../../assets/discography/AngerManagement.svg'




export default function discography() {

    const albums = [
        {
            image: AngerManagement,
            title: 'Anger Management',
            year: '2023',
            links: [],

        }
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
                <p>One of the best in the game, <br /> don’t believe play a tape.</p>
            </div>

            <div className="">
                <h2>Albums & EPs</h2>
                {albums.map((album, index) => (
                    <div key={index} className={discographyStyles.albumCard}>
                        <Image src={headphones} className={discographyStyles.headphonesImage} alt='headphones' />
                        <Image src={AngerManagement} className={discographyStyles.albumImage} alt='anger management' />
                        <div className={discographyStyles.albumText}>
                            <p>Album</p>
                            <p>{album.year}</p>
                            <h1>{album.title}</h1>
                        </div>
                    </div>
                ))}
            </div>

            <div className="">
                <h2>Singles & Featuress</h2>
            </div>
        </section>
    )
}


