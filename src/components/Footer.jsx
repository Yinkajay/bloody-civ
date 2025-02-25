import Link from 'next/link'
import footerStyles from './Footer.module.css'
import portrait from '../../assets/footer/portrait.png'
import spongebob from '../../assets/footer/spongebob.png'
import Image from 'next/image'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

import playground from '../../assets/nav/playground.svg'
import emoseh from '../../assets/nav/emoseh.svg'
import tape from '../../assets/nav/tape.svg'
import yt from '../../assets/nav/youtube.svg'
import credits from '../../assets/nav/credits.svg'


const Footer = () => {
    const router = useRouter()

    const navRoutes = <>
        <Link href='/playground'>
            <li className={router.pathname == '/playground' ? footerStyles['active-link'] : ''}>
                <Image src={playground} alt='playground icon' />
                Playground
            </li>
        </Link>
        <Link href='/biography'>
            <li className={router.pathname == '/biography' ? footerStyles['active-link'] : ''}>
                <Image src={emoseh} alt='emoseh icon' />
                Emoseh
            </li>
        </Link>
        <Link href='/discography'>
            <li className={router.pathname == '/discography' ? footerStyles['active-link'] : ''}>
                <Image src={tape} alt='tape icon' />
                Tape
            </li>
        </Link>
        <Link href='/visuals'>
            <li className={router.pathname == '/visuals' ? footerStyles['active-link'] : ''}>
                <Image src={yt} alt='video icon' />
                YT
            </li>
        </Link>
        <Link href='/credits'>
            <li className={router.pathname == '/credits' ? footerStyles['active-link'] : ''}>
                <Image src={credits} alt='credits icon' />
                Credits
            </li>
        </Link>
    </>

    return (
        <>

            <footer className={footerStyles['main-footer']}>
                <section className={footerStyles['top-area']}>
                    <div className={footerStyles['top-left-area']}>
                        <Image src={portrait} width="auto" alt="spongebob" />
                    </div>

                    <div className={footerStyles['top-middle-area']}>
                        <section>
                            <Link href='https://x.com/bloody___civ'>X</Link>
                            <Link href='https://www.instagram.com/bloody__civ/'>Instagram</Link>
                            <Link href='https://www.snapchat.com/add/bloodyciv'>Snapchat</Link>
                        </section>
                        <section>
                            <nav className={footerStyles['footer-nav']}>
                                {navRoutes}
                            </nav>
                        </section>
                    </div>

                    <div className={footerStyles['top-right-area']}>
                        <Image src={spongebob} width="auto" alt="spongebob" />
                        <p>designed and developed with ❤️</p>
                    </div>
                </section>
                <p>Fan Site for bloody civilian @ 2024</p>
            </footer>


            <footer className={footerStyles['mobile-footer']}>
                <div className={footerStyles['mobile-top']}>
                    <Image src={portrait} width="auto" alt="spongebob" />
                    <section>
                        <Link href='https://x.com/bloody___civ'>X</Link>
                        <Link href='https://www.instagram.com/bloody__civ/'>Instagram</Link>
                        <Link href='https://www.snapchat.com/add/bloodyciv'>Snapchat</Link>
                    </section>
                </div>

                <div className={footerStyles['mobile-middle']}>
                    <Image src={spongebob} width="auto" alt="spongebob" />
                    <p>designed and developed with ❤️</p>
                </div>


                <div className={footerStyles['mobile-bottom']}>
                    <div className={footerStyles['footer-nav']}>
                        {navRoutes}
                    </div>
                    <p>Fan Site for bloody civilian @ 2024</p>
                </div>
            </footer>
        </>
    )
}
export default Footer
