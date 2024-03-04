import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {services} from "../constants/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";
import {useInView} from 'react-intersection-observer';

const ServiceCard = ({index, title, icon}) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Set this to true if you want the animation to trigger only once
    });

    const fadeInVariants = {
        hidden: {opacity: 0, x: -100}, // Start off-screen left
        visible: {
            opacity: 1,
            x: 0, // Move to the initial position
            transition: {duration: 0.75, type: "spring", delay: 0.2 * index},
        },
    };

    return (
        <Tilt className={"xs:w-[250px] w-full"}>
            <motion.div ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={fadeInVariants}
                        className={"w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"}>
                <div options={{max: 45, scale: 1, speed: 450}}
                     className={"bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"}>
                    <img src={icon} alt={title} className={"w-16 h-16 object-contain"}/>
                    <h3 className={"text-white text-[20px] font-bold text-center"}>{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}
const About = () => {
    const [divRef, divInView] = useInView({
        triggerOnce: false, // Set this to true if you want the animation to trigger only once
    });

    const [pRef, pInView] = useInView({
        triggerOnce: false,
    });


    return (
        <div id={'#about'}>
            <motion.div ref={divRef}
                        initial="hidden"
                        animate={divInView ? "show" : "hidden"} variants={textVariant()}>
                <p className={styles.sectionHeadText}>Overview.</p>
                {/*<h2 className={styles.sectionHeadText}>Overview.</h2>*/}
            </motion.div>
            <motion.p ref={pRef}
                      initial="hidden"
                      animate={pInView ? "show" : "hidden"}
                      variants={fadeIn("", "", 0.1, 1)}
                      className={"mt-4 text-secondary text-[17px] max-w-8xl leading-[30px]"}>
                I'm a Software Developer with Masters degree in Computer Science. With experience at Mega Zebra and Itinker, I excel in automating
                processes, improving system scalability, and developing high-impact web applications. Skilled in
                technologies like AWS, Docker, Kubernetes, React.js, and NodeJS, I combine innovation with
                efficiency to drive technological advancements. My work has notably enhanced deployment efficiency,
                increased sales through web applications, and improved system performance, showcasing my commitment to
                excellence and problem-solving.

                <br/>
                Let's work together to create extraordinary digital experiences together!
            </motion.p>
            {/*<div className={"mt-20 flex flex-wrap gap-10"}>*/}
            {/*    {services.map((service, index) => (*/}
            {/*        <ServiceCard key={service.title} index={index} {...service}/>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    )
}

export default SectionWrapper(About, "about")