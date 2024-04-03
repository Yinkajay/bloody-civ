import Link from 'next/link'
import footerStyles from './Footer.module.css'
import portrait from '../../assets/footer/portrait.svg'
import spongebob from '../../assets/footer/spongebob.png'
import Image from 'next/image'
import Navbar from './Navbar'

const Footer = () => {
    return (
        <footer className={footerStyles['main-footer']}>
            <section className={footerStyles['top-area']}>
                <div className={footerStyles['top-left-area']}>
                    <h2>Bloody</h2>
                    <Image src={portrait} width="auto" alt="spongebob"  />
                    <h2><i>Civilian</i></h2>
                </div>

                <div className={footerStyles['top-middle-area']}>
                    <section>
                        <Link href='/'>X</Link>
                        <Link href='/'>Instagram</Link>
                        <Link href='/'>Snapchat</Link>
                    </section>
                    <section>
                        <Navbar />
                    </section>
                </div>

                <div className={footerStyles['top-right-area']}>
                    <Image src={spongebob} width="auto"  alt="spongebob" />
                    <p>deisgned and developed with ❤️</p>
                </div>
            </section>
            <p>Fan Site for bloody civilian @ 2024</p>
        </footer>
    )
}
export default Footer
