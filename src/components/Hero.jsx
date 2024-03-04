import React from 'react'
import {motion} from "framer-motion";
import {styles} from "../styles.js"
import {ComputersCanvas} from "./canvas"
import {hero1} from "../assets"
import {Tilt} from "react-tilt";
import {fadeIn} from "../utils/motion.js";

const Hero = () => {
    return (
        <section className={"w-full h-screen mx-auto flex justify-center items-center"}>
            <div
                className={`${styles.paddingX} top-[120px] mt-10 max-w-7xl mx-auto flex flex-col gap-5 justify-center items-center`}>
                <div className={"text-center"}>
                    <h1 className={`${styles.heroHeadText} mb-3 mt-3`}>Hi, I'm <span
                        className={"text-coral"}>Shaurya</span></h1>
                    <p className={`${styles.heroSubText} text-white-100 text-center`}>a Software Developer,
                        <br className={"sm:block hidden"}/> with Proven Track Record in Streamlining Deployment and Enhancing System Scalability</p>
                </div>
                <Tilt>
                    <div className={"relative bg-gradient-to-b from-coral rounded-full overflow-hidden w-80 h-80 mt-5"}>
                        <img
                            src={hero1}
                            alt={"avatar"}
                            className={"object-cover w-full h-full rounded-full"}
                        />
                    </div>
                </Tilt>
                <div className={"xs:bottom-10 bottom-32 w-full flex justify-center items-center"}>
                    <a href={"#about"}>
                        <div
                            className={"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 "}>
                            <motion.div animate={{y: [0, 24, 0]}}
                                        transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop'}}
                                        className={"w-3 h-3 rounded-full bg-secondary mb-1"}/>
                        </div>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default Hero