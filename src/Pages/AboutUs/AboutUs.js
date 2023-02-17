import React from 'react';
import { FaGit, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import CountUp from 'react-countup/build';
import { Helmet } from "react-helmet";
import OurTeam from '../Home/OurTeam/OurTeam';
import meetingImgOne from '../../assets/meeting-1.jpg';
import meetingImgTwo from '../../assets/meeting-2.jpg';
import meetingImgThree from '../../assets/meeting-3.jpg';
import founderImg from '../../assets/founder.jpg';
import foundedImg from "../../assets/founded.avif";
import './AboutUs.css'
import styles from '../../style';
import Button from '../../components/Buttons/Button';
import { Link } from 'react-router-dom';
import { HiOutlineChevronDoubleRight, HiCheck, HiChevronRight, HiReply, HiOutlineViewGrid, HiOutlineUserGroup } from "react-icons/hi";
import {motion} from 'framer-motion'
import {staggerContainer} from '../../utils/motion'
import Logo from '../../components/Logo';
const AboutUs = () => {

    return (
        <div className={` ${styles.paddingY} relative`}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - AboutUs</title>
            </Helmet>
            <motion.div variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.25 }} className='text-white'>
                <div className='lg:flex justify-around items-center uppercase'>
                <h1 className='text-7xl font-bold'>About Us</h1>
                <h3 className='text-2xl semi-title mt-3'>We live by the code of passion</h3>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                <div className='about-background rounded-md'>
                    <div className='lg:w-3/4 mx-auto text-center'>
                        <h1 className='text-3xl lg:text-6xl font-semibold font-serif'>We are team of creators & innovators</h1>
                        <p className='my-4 font-poppins'>We help developers like you grow up & improves their coding skills</p>
                        
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/login">
                        <Button>Join With Us<HiOutlineChevronDoubleRight></HiOutlineChevronDoubleRight></Button>
                        </Link>
                     </div>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                <div className='lg:flex justify-around'>
                    <div className='lg:w-2/3'>
                        <p className='uppercase text-pink-400 font-bold'>Introducting your coding platform</p>
                        <h1 className='text-3xl lg:text-6xl font-bold my-3 lg:my-3'>We are dedicated to make your coding productive</h1>
                    </div>
                    <div>
                        <div className='text-xl lg:text-2xl leading-10 font-poppins'>
                        <h3 className='flex items-center'><HiCheck className='mr-3 about-icons'></HiCheck>Verified 4M+ Users</h3>
                        <h3 className='flex items-center'><HiCheck className='mr-3 about-icons'></HiCheck>More than 1K+ Projects</h3>
                        <h3 className='flex items-center'><HiCheck className='mr-3 about-icons'></HiCheck>Very easy to code</h3>
                        <h3 className='flex items-center'><HiCheck className='mr-3 about-icons'></HiCheck>Save projects by one click</h3>
                    </div>
                    </div>
                </div>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                    <div className='grid gap-4 lg:grid-cols-4 font-poppins'>
                        <div className='p-4 bg-gradient-to-r from-blue-400 to-slate-500 rounded-md'>
                            <div className='ml-12'>
                            <h1 className="text-5xl font-bold">07+</h1>
                            <h1 className='text-2xl'>Years of Operation</h1>
                            </div>
                        </div>
                        <div className='p-4 bg-gradient-to-r from-blue-400 to-slate-500 rounded-md'>
                            <div className="ml-12">
                            <h1 className="text-4xl font-bold">2.5M</h1>
                            <h1 className='text-2xl'>Yearly Revenue</h1>
                            </div>
                        </div>
                        <div className='p-4 bg-gradient-to-r from-blue-400 to-slate-500 rounded-md'>
                            <div className="ml-12">
                            <h1 className="text-4xl font-bold">4M+</h1>
                            <h1 className='text-2xl'>User Worldwide</h1>
                            </div>
                        </div>
                        <div className='p-4 bg-gradient-to-r from-blue-400 to-slate-500 rounded-md'>
                            <div className="ml-12">
                            <h1 className="text-4xl font-bold">2.5X</h1>
                            <h1 className='text-2xl'>Growth Rate</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                    <div className='text-center'>
                        <h1 className='text-2xl lg:text-5xl font-serif font-semibold'>We do daily research on how to make your code experience more comfortable</h1>
                        <div className='mt-20 w-[85%] lg:w-3/4 mx-auto'>
                        <div className='flex gap-3 items-center'>
                            <div>
                                <img className='rounded-tr-lg rounded-bl-lg' src={meetingImgOne} alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <img className='w-2/3 rounded-lg' src={meetingImgTwo} alt="" />
                                <img className='w-2/3 rounded-lg' src={meetingImgThree} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               <div className={` ${styles.paddingY} relative`}>
                    <div className='grid lg:grid-cols-2'>
                    <div>
                        <h1 className='uppercase text-4xl lg:text-7xl founded-date'>founded in 2019</h1>
                        <p className='font-poppins leading-6 my-4 lg:w-2/3 text-justify'>CodersStackBox vision to create a an virtual enviornmnet for the thrusty developers who went to learn & practise code. In our site you can easily run code without any delay. Also save them by one click. We are always ready to give our best. </p>
                        <Button>Sign Up<HiChevronRight className='text-2xl'></HiChevronRight></Button>
                    </div>
                    <div>
                        <img className='rounded-sm my-3 lg:mt-0' src={foundedImg} alt="" />
                    </div>
                    </div>
                </div>
                <div className={` ${styles.paddingY} relative bg-white rounded-sm text-black p-4`}>
                    <div>
                        <div className='text-center font-poppins'>
                            <h1 className='text-4xl lg:text-7xl lg:w-1/2 mx-auto font-bold'>The values we live by</h1>
                            <p className='mt-5'>Save projects from your projects, and deliver results that drives success for you.</p>
                        </div>
                        <div className={` ${styles.paddingY} relative grid gap-8 md:grid-cols-2 lg:grid-cols-3 font-poppins`}>
                            <div className='bg-gray-300 p-4'>
                                <HiReply className='text-2xl'></HiReply>
                                <h2 className='text-3xl font-semibold'>Daily Hard Work</h2>
                                <p className='text-gray-500 font-bold uppercase'>We Work Hard Every Day</p>
                                <p className='w-2/3 mt-3'>We keep our promises, provide upfront timelines and brings predictability</p>
                            </div>
                            <div className='bg-gray-300 p-4'>
                                <HiReply className='text-2xl'></HiReply>
                                <h2 className='text-3xl font-semibold'>Passion Before Money</h2>
                                <p className='text-gray-500 font-bold uppercase'>Our decisions are driven</p>
                                <p className='w-2/3 mt-3'>We keep our promises, provide upfront timelines and brings predictability</p>
                            </div>
                            <div className='bg-gray-300 p-4'>
                                <HiReply className='text-2xl'></HiReply>
                                <h2 className='text-3xl font-semibold'>Team Work Drives Results</h2>
                                <p className='text-gray-500 font-bold uppercase'>The teams comes before</p>
                                <p className='w-2/3 mt-3'>We keep our promises, provide upfront timelines and brings predictability</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                    <div className='bg-blue-700 p-6 font-poppins lg:flex gap-5'>
                        <div className='lg:w-2/2'>
                        <h5 className="uppercase font-semibold">Our Values</h5>
                        <h1 className='text-3xl lg:text-5xl font-bold'>We are not only a company we are a family</h1>
                        </div>
                        <div className='text-black grid mt-3 lg:mt-0 lg:grid-cols-2 gap-3'>
                           <div className='bg-white p-5'>
                            <HiOutlineViewGrid className='text-2xl text-blue-600'></HiOutlineViewGrid>
                            <h2 className='text-2xl font-semibold my-2'>Friendly Environment</h2>
                            <p className='text-justify'>We are not always act like a company. We are also friend of our employees</p>
                            </div> 
                           <div className='bg-white p-5'>
                            <HiOutlineUserGroup className='text-2xl text-blue-600'></HiOutlineUserGroup>
                            <h2 className='text-2xl font-semibold my-2'>A Family</h2>
                            <p className='text-justify'>We are not always act like a company. We are also friend of our employees</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </motion.div>
            {/* <OurTeam></OurTeam> */}
        </div>
    );
};

export default AboutUs;