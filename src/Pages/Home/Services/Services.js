import React from 'react';
import { TitleText, TypingText } from '../../../components/CustomText/CustomText';
import styles, { layout } from '../../../style';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '../../../utils/motion';
import { servicesInfo } from '../../../constants';
const Services = () => {
    return (

        <div id='service' className={`${layout.sectionCol} text-white`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}>
                <div className={`${layout.sectionInfo} text-center`}>
                    <TypingText title="| Our Services" />
                    <TitleText title={<>Codestack is a platform that allows you to build, run, and share </>} />
                    {/* <h1 className={`${styles.heading2} `}>Our Services</h1>
                <p className={`${styles.paragraph} `}>Codestack is a platform that allows you to build, run, and share code in three different programming languages HTMl, CSS and JAVASCRIPT.</p> */}
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2 mt-10 z-10'>
                    {
                        servicesInfo.map(e => <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1)} className=' border border-lime-500 rounded-md mt-10'>
                            <div className='p-6'>
                                <img className="h-12 w-12 bg-emerald-100 rounded-md -mt-12" src={e.image} alt="" />
                                <h2 className="text-center font-bold text-xl lg:-mt-6">{e.title}</h2>
                                <p className="text-center mt-10">{e.details}</p>
                            </div>
                        </motion.div>)
                    }
                </div>
            </motion.div>
        </div>
    );
};

export default Services;