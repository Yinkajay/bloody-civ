import Image from "next/image";

import classes from './visuals.module.css'

import leftarrow from '../../assets/visuals/leftarrow.svg'
import rightarrow from '../../assets/visuals/rightarrow.svg'

export default function visuals() {
    return (
        <section>
            <section>
                <h1>Visuals, <span></span></h1>
                <h1>BLOODY CIVILIAN</h1>
                <Image />
                <p></p>
            </section>

            <section>
                <h1>Music Videos</h1>
                <div className="">

                </div>
                <div className="">
                    <Image  />
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


