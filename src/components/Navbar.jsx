import { useRouter } from 'next/router'
import navClasses from './Navbar.module.css'
import Link from 'next/link'
const Navbar = () => {
    const router = useRouter()

    console.log(router)
    return (
        <nav className={navClasses['main-nav']}>
            <Link href='/playground' className={router.pathname == '/playground' ? navClasses['active-link'] : ''}>Playground</Link>
            <Link href='/biography' className={router.pathname == '/biography' ? navClasses['active-link'] : ''}>Emoseh</Link>
            <Link href='/discography' className={router.pathname == '/discography' ? navClasses['active-link'] : ''}>Tape</Link>
            <Link href='/visuals' className={router.pathname == '/visuals' ? navClasses['active-link'] : ''}>YT</Link>
            <Link href='/credits' className={router.pathname == '/credits' ? navClasses['active-link'] : ''}>Credits</Link>
        </nav>
    )
}

export default Navbar
