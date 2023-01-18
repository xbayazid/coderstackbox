import React from 'react';
import './Right.css';


const Right = () => {
    return (
        <div className='w-full rightside'>
            <div className=''>
                <div className={`md:text-8xl text-4xl font-bold`}>
                    Code anything from idea to production.
                </div>
            </div>
            <div className='text-3xl text-gray-200'>
                Welcome to the Coder StackBox documentation, an online code editor
                built with React.js. Coder StackBox is a powerful tool that offers a
                simple, user-friendly interface for writing and editing code.
            </div>
            <img
                className="rounded-lg my-5"
                src="https://codesandbox.io/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fcover-projects.c6de4195.jpg&w=1920&q=75"
                alt=""
            />

            <div className='text-2xl text-gray-200' >

                CodeSandbox provides many alternatives for you to code. Each option is
                built to help you focus on what matters: getting the work done without
                friction.
            </div>
            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />
            <h1 className='text-4xl text-white'>Getting Started</h1>
            <div className='text-2xl text-gray-200' >
                To use Coder StackBox, you'll first need to create an account on our
                website. Once you've logged in, you'll be able to create new projects
                or open existing ones. You can begin coding right away, and Coder
                StackBox will save your progress as you work.
            </div>
            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />
            <div className='text-2xl text-gray-200'>
                <h1 className='text-4xl text-white'>Tips and Tricks</h1>
                <ul>
                    <li>
                        Syntax highlighting for multiple languages, including
                        JavaScript, Python, HTML, CSS, and more
                    </li>
                    <li>
                        Autocomplete and IntelliSense, with suggestions as you type
                    </li>
                    <li>
                        Code folding and bracket matching, to help you navigate and
                        understand your code
                    </li>
                    <li>Multiple panes for working on multiple files at once</li>
                    <li>Customizable themes and keyboard shortcuts</li>
                    <li>
                        Live preview, to see the changes you make to your code in
                        real-time
                    </li>
                    <li>
                        Code collaboration, you can invite other developers to work on
                        your project with you in real-time.
                    </li>
                </ul>
            </div>
            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />

            <h1 className='text-4xl text-white'>Cloud Web Editor</h1>
            <div className='text-2xl text-gray-200'>
                Our new web editor is part of a larger effort at CodeSandbox to increase the 
                accessibility of complex tools like git, setup, 
                review flows, contributions, and visualizing components.
            </div>

            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />
        </div>
    );
};

export default Right;