import { useRouter } from 'next/router'
import navClasses from './Navbar.module.css'
import Link from 'next/link'

import playground from '../../assets/nav/playground.svg'
import emoseh from '../../assets/nav/emoseh.svg'
import tape from '../../assets/nav/tape.svg'
import yt from '../../assets/nav/youtube.svg'
import credits from '../../assets/nav/credits.svg'
import Image from 'next/image'


const Navbar = () => {
    const router = useRouter()

    // console.log(router)
    return (
        <nav className={navClasses['main-nav']}>
            <Link href='/playground'>
                <li className={router.pathname == '/playground' ? navClasses['active-link'] : ''}>
                    <Image src={playground} alt='playground icon' />
                    Playground
                </li>
            </Link>
            <Link href='/biography'>
                <li className={router.pathname == '/biography' ? navClasses['active-link'] : ''}>
                    <Image src={emoseh} alt='emoseh icon' />
                    Emoseh
                </li>
            </Link>
            <Link href='/discography'>
                <li className={router.pathname == '/discography' ? navClasses['active-link'] : ''}>
                    <Image src={tape} alt='tape icon' />
                    Tape
                </li>
            </Link>
            <Link href='/visuals'>
                <li className={router.pathname == '/visuals' ? navClasses['active-link'] : ''}>
                    <Image src={yt} alt='video icon' />
                    YT
                </li>
            </Link>
            <Link href='/credits'>
                <li className={router.pathname == '/credits' ? navClasses['active-link'] : ''}>
                    <Image src={credits} alt='credits icon' />
                    Credits
                </li>
            </Link> 
        </nav>
    )
}

export default Navbar
