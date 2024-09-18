import Image from 'next/image'
import LoaderPic from '../../../assets/loader/RoundImage.svg'

const RouteLoader = () => {
    return (
        <section>
            <Image src={LoaderPic} alt='bloody herself' />
            <p>Listen to bloody civilian today</p>
        </section>
    )
}

export default RouteLoader
