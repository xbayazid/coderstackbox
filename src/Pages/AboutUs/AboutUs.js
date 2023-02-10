import React from 'react';
import { FaGit, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import CountUp from 'react-countup/build';
import { Helmet } from "react-helmet";
import OurTeam from '../Home/OurTeam/OurTeam';
import meetingImgOne from '../../assets/meeting-1.jpg'
import meetingImgTwo from '../../assets/meeting-2.jpg'
import meetingImgThree from '../../assets/meeting-3.jpg'
import foundedImg from "../../assets/founded.avif";
import './AboutUs.css'
import styles from '../../style';
import Button from '../../components/Buttons/Button';
import { Link } from 'react-router-dom';
import { HiOutlineChevronDoubleRight, HiCheck, HiChevronRight, HiReply } from "react-icons/hi";
const AboutUs = () => {

    return (
        <div className={` ${styles.paddingY} relative`}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CodersStackBox - AboutUs</title>
            </Helmet>
            {/* <div className='text-white text-justify'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-3xl mt-10 font-bold text-secondary'>About Us</h2>
                    <div className='flex gap-2 items-center text-xl my-10'>
                        <p>Follow us on </p>
                        <FaGithub></FaGithub>
                        <FaLinkedinIn></FaLinkedinIn>
                        <FaTwitter></FaTwitter>
                    </div>
                </div>

                <p>
                    Let's build from here, The team behind the code editor is comprised of experienced web developers who are dedicated to creating high-quality tools for the developer community. Our online code editor is a powerful and easy-to-use tool for writing and testing code. Built using React and other modern web technologies, it offers a wide range of features for developers of all levels, including syntax highlighting, code completion, and real-time error checking. <br /> <br />

                    "Our development team is comprised of highly skilled and experienced software engineers who are dedicated to creating innovative and user-friendly technology solutions. We specialize in a variety of programming languages and frameworks, including React.js, and our team is always up-to-date with the latest industry trends and advancements. <br /> <br />

                    We take pride in our ability to understand our clients' needs and deliver customized solutions that exceed their expectations. Our goal is to build robust, scalable, and visually appealing products that provide an exceptional user experience. We are a team of passionate individuals who are constantly pushing the boundaries of what is possible with technology. We value collaboration, communication, and continuous learning, and we are committed to delivering the highest quality products and services to our clients. Thank you for choosing our application!"
                </p>

                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center my-10 mx-5'>
                    <div className=' p-3 rounded-md border-2 border-blue-500 shadow-2xl shadow-blue-400'>
                        <CountUp className='text-5xl' start={0} end={58} duration={2.75} separator=" " suffix=" +"></CountUp>
                        <p className='text-2xl font-semibold text-secondary'>Total Developers</p>
                    </div>
                    <div className=' p-3 rounded-md border-2 border-blue-500 shadow-2xl shadow-blue-400'>
                        <CountUp className='text-5xl' start={0} end={100} duration={2.75} separator=" " suffix=" +"></CountUp>
                        <p className='text-2xl font-semibold text-secondary'>Complete Projects</p>
                    </div>
                    <div className=' p-3 rounded-md border-2 border-blue-500 shadow-2xl shadow-blue-400'>
                        <CountUp className='text-5xl' start={0} end={99} duration={2.75} separator=" " suffix=" %"></CountUp>
                        <p className='text-2xl font-semibold text-secondary'>User-Friendly</p>
                    </div>
                </div>

                <h2 className='mb-5 text-2xl'>Histery of Coders StackBox:</h2>

                <p>The development of our online code editor began in early 2020, when our team identified a need for a versatile and user-friendly tool that could be used by developers of all skill levels. Our goal was to create a platform that would make it easy for developers to write, test, and share their code, no matter where they were located.</p>
                The first version of our editor was a basic web-based text editor that allowed users to write and save their code. However, we quickly realized that this was not enough to meet the needs of our users, so we began adding new features to improve the functionality of the editor.

                <p>One of the first major changes we made was to add syntax highlighting and code completion, which made it easier for users to write and understand their code. We also added a built-in code execution feature, which allowed users to test their code without having to leave the editor. As we continued to develop the editor, we added more advanced features such as version control, debugging tools, and collaboration capabilities. We also made a number of improvements to the user interface to make it more intuitive and user-friendly. Over time, our online code editor has grown to become a powerful and versatile tool that is used by thousands of developers around the world. We are constantly working to improve the editor and add new features to meet the evolving needs of our users.</p>

                <h2 className='mt-2'>We use the following technologies to build our code editor:</h2>
                <ul className='ml-5 my-2'>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                </ul>
                <p>
                    If you have any questions or feedback, please don't hesitate to contact us at coders.stackbox@gmail.com
                    <br />
                    We believe in open-source and the power of community,contineue that's why our code editor is open-sourced and available on GitHub. You can find the source code and contributing guidelines here and the license used here.
                </p>
            </div> */}
            <div  className='text-white'>
                <div className='flex justify-around items-center uppercase'>
                <h1 className='text-7xl font-bold'>About Us</h1>
                <h3 className='text-2xl semi-title'>We live by the code of passion</h3>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                <div className='about-background rounded-md'>
                    <div className='w-3/4 mx-auto text-center'>
                        <h1 className='text-6xl font-semibold font-serif'>We are team of creators & innovators</h1>
                        <p className='my-4 font-poppins'>We help developers like you grow up & improves their coding skills</p>
                        
                    </div>
                    <div className='flex justify-center'>
                        <Link to="/login">
                        <Button>Join With Us<HiOutlineChevronDoubleRight></HiOutlineChevronDoubleRight></Button>
                        </Link>
                     </div>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                <div className='flex justify-around'>
                    <div className='w-2/3'>
                        <p className='uppercase text-pink-400 font-bold'>Introducting your coding platform</p>
                        <h1 className='text-6xl font-bold w-'>We are dedicated to make your coding productive</h1>
                    </div>
                    <div>
                        <div className='text-2xl leading-10 font-poppins'>
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
                        <div className='p-4 bg-gradient-to-r from-pink-400 to-slate-500 rounded-md'>
                            <div className='ml-12'>
                            <h1 className="text-5xl font-bold">07+</h1>
                            <h1 className='text-2xl'>Years of Operation</h1>
                            </div>
                        </div>
                        <div className='p-4 bg-gradient-to-r from-pink-400 to-slate-500 rounded-md'>
                            <div className="ml-12">
                            <h1 className="text-4xl font-bold">2.5M</h1>
                            <h1 className='text-2xl'>Yearly Revenue</h1>
                            </div>
                        </div>
                        <div className='p-4 bg-gradient-to-r from-pink-400 to-slate-500 rounded-md'>
                            <div className="ml-12">
                            <h1 className="text-4xl font-bold">4M+</h1>
                            <h1 className='text-2xl'>User Worldwide</h1>
                            </div>
                        </div>
                        <div className='p-4 bg-gradient-to-r from-pink-400 to-slate-500 rounded-md'>
                            <div className="ml-12">
                            <h1 className="text-4xl font-bold">2.5X</h1>
                            <h1 className='text-2xl'>Growth Rate</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={` ${styles.paddingY} relative`}>
                    <div className='text-center'>
                        <h1 className='text-5xl font-serif font-semibold'>We do daily research on how to make your code experience more comfortable</h1>
                        <div className='mt-20 w-3/4 mx-auto'>
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
                    <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='uppercase text-7xl founded-date'>founded in 2019</h1>
                        <p className='font-poppins leading-6 my-4 w-2/3 text-justify'>CodersStackBox vision to create a an virtual enviornmnet for the thrusty developers who went to learn & practise code. In our site you can easily run code without any delay. Also save them by one click. We are always ready to give our best. </p>
                        <Button>Sign Up<HiChevronRight className='text-2xl'></HiChevronRight></Button>
                    </div>
                    <div>
                        <img className='rounded-sm' src={foundedImg} alt="" />
                    </div>
                    </div>
                </div>
                <div className={` ${styles.paddingY} relative bg-white rounded-sm text-black p-4`}>
                    <div>
                        <div className='text-center font-poppins'>
                            <h1 className='text-7xl w-1/2 mx-auto font-bold'>The values we live by</h1>
                            <p className='mt-5'>Save projects from your projects, and deliver results that drives success for you.</p>
                        </div>
                        <div className={` ${styles.paddingY} relative grid gap-8 grid-cols-3 font-poppins`}>
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
                {/* <div className={` ${styles.paddingY} relative`}>
                    <div className='bg-blue-700 p-6 font-poppins'>
                        <div>
                        <h5 className="uppercase font-semibold">Our Values</h5>
                        <h1 className='text-5xl font-bold'>We are not only a company we are a family</h1>
                        </div>
                        <div>

                        </div>
                    </div>
                </div> */}
                </div>
            </div>
            {/* <OurTeam></OurTeam> */}
        </div>
    );
};

export default AboutUs;