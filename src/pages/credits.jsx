import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

import classes from './credits.module.css'

import gauntlet from '../../assets/credits/irongauntlet.svg'
import spidermen from '../../assets/credits/spidermen.svg'
import hammer from '../../assets/credits/hammer.svg'
import inspopic from '../../assets/credits/inspo-pic.svg'
import twitter from '../../assets/credits/twittericon.svg'
import linkedin from '../../assets/credits/linkedinicon.svg'
import trophy from '../../assets/credits/trophy.svg'
import { fadeUp, scaleIn } from '@/utils/animationVariants'

const pageVariants = {
    initial: {
        opacity: 0,
        scale: 1.05,
        filter: 'blur(4px)'
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.1
        }
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        filter: 'blur(2px)',
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    }
}

export default function credits() {
    return (

        <motion.section className={classes.credits} variants={pageVariants} initial="initial" animate="animate" exit="exit">

            <article>
                <h1>Credits,</h1>
                <h1>BLOODY <i>CIVILIAN</i></h1>
                <p>The baddest guys are behind this awesome site!</p>
            </article>

            <motion.section className={classes.magicians} initial="hidden" whileInView="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
                <Image src={trophy} alt='trophy image' />

                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.1 }}>
                    <h1>Direction & Design</h1>
                    <Image src={gauntlet} alt='infinity gauntlet' />
                    <div className={classes.links}>
                        <p>Mojola</p>
                        <Link href='https://x.com/themojola'>
                            <Image className={classes.twitterImg} src={twitter} alt='twitter icon' />
                        </Link>
                        <Link href='https://www.linkedin.com/in/themojola'>
                            <Image className={classes.linkedinImg} src={linkedin} alt='linkedin icon' />
                        </Link>
                    </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.1 }}>
                    <h1>Design & Motion</h1>
                    <Image src={spidermen} alt='spidermen' />
                    <div className={classes.links}>
                        <p>Williams</p>
                        <Link href=''>
                            <Image className={classes.twitterImg} src={twitter} alt='twitter icon' />
                        </Link>
                        <Link href=''>
                            <Image className={classes.linkedinImg} src={linkedin} alt='linkedin icon' />
                        </Link>
                    </div>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.1 }}>
                    <h1 className={classes.unbrokenHeading}>Development</h1>
                    <h1 className={classes.brokenHeading}>Develop- <br /> ment</h1>
                    <Image src={hammer} alt='thors hammer' />
                    <div className={classes.links}>
                        <p>Yinx</p>
                        <Link href='https://x.com/zeuslgndd'>
                            <Image className={classes.twitterImg} src={twitter} alt='twitter icon' />
                        </Link>
                        <Link href='https://www.linkedin.com/in/yinka-junaid-a9a654171/'>
                            <Image className={classes.linkedinImg} src={linkedin} alt='linkedin icon' />
                        </Link>
                    </div>
                </motion.div>
            </motion.section>

            <motion.section className={classes.tools} variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
                <div className="">
                    <div className="">
                        <h1>Inspiration</h1>
                        <p>The inspiration for this ranges from bloody civilian, to posters, to websites, to pinterest, to memes...</p>
                    </div>
                    <div className="">
                        <h1>Typeface</h1>
                        <p>Typefaces used for this are Rebound Grotesque & Roboto Mono</p>
                    </div>
                    <div className="">
                        <h1>We used</h1>
                        <p>We used work from Figma community, Instagram, Spotify, Youtube etc </p>
                    </div>
                </div>
                <Image src={inspopic} alt='inspo pic mashup' />
            </motion.section>

        </motion.section>
    )
}


