import Image from 'next/image'
import imagesmash from '../../assets/loader/Imagemash.svg'

import LoaderStyles from './LoaderScreen.module.css'

export default function LoaderScreen() {
    return (
        <section className={LoaderStyles.loader}>
            <Image src={imagesmash} alt="random-pictures" />
            <p>I dont like you</p>
            <p>come from</p>
            <p>escapism</p>
            <p>blood on the dance floor</p>
            <p>family meeting</p>
            <p>wake up</p>
            <p>how to kill a man</p>
            <p>mad apology</p>
        </section>
    )
}