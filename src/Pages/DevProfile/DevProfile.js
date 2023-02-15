import React from 'react';
import styles from '../../style';
import DevDetails from './DevDetails/DevDetails';
import DevProjects from './DevProjects/DevProjects';

const devProfiles = [
    {
        id: "1",
        projectImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        devImg: "https://i.ibb.co/6twZ7yY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
        devName: "Jessia", 
        projectTitle: "Text Loader Animation",
        react: "5"
    },
    {
        id: "2",
        projectImg: "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTc1MDQ0NTN8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60",
        devImg: "https://i.ibb.co/6twZ7yY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
        devName: "Jessia", 
        projectTitle: "CSS Filter Cards",
        react: "5"
    },
    {
        id: "3",
        projectImg: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        devImg: "https://i.ibb.co/6twZ7yY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
        devName: "Jessia", 
        projectTitle: "Grids, Cards, and Blog Layouts",
        react: "5"
    },
    {
        id: "4",
        projectImg: "https://thumbs.dreamstime.com/b/cropped-shot-person-taking-notes-working-laptop-table-cropped-shot-person-taking-notes-working-laptop-120659133.jpg",
        devImg: "https://i.ibb.co/6twZ7yY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
        devName: "Jessia", 
        projectTitle: "House resizing with CSS",
        react: "5"
    },
    {
        id: "5",
        projectImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VifGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        devImg: "https://i.ibb.co/6twZ7yY/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg",
        devName: "Jessia", 
        projectTitle: "Netflix intro Animation",
        react: "5"
    },
]

const DevProfile = () => {
    return (
        <div className={` ${styles.paddingY} relative`}>
            <div>
                <DevDetails></DevDetails>
                <div className='mt-12 text-white'>
                        <h1 className='text-4xl font-serif font-bold'>Projects</h1>
                        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
                            {
                                devProfiles.map(devProfile => <DevProjects
                                key={devProfile.id}
                                devProfile={devProfile}
                                ></DevProjects>)
                            }
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default DevProfile;