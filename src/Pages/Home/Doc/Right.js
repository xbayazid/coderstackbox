import React from 'react';
import './Right.css';


const Right = () => {
    return (
        <div className='w-full rightside px-10 '>
            <div id='overview'>
                <div className='text-dimWhite'>
                    <div className={`md:text-8xl text-4xl font-bold`}>
                        Code anything from idea to production.
                    </div>
                </div>

                <div className='mt-2 text-gray-200'>
                    <h1 className="text-3xl">Welcome to the Coder StackBox documentation, an online code editor
                    built with React.js. Coder StackBox is a powerful tool that offers a
                    simple, user-friendly interface for writing and editing code.</h1>
                </div>

                <img
                    className="rounded-lg my-5"
                    src="https://codesandbox.io/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fcover-projects.c6de4195.jpg&w=1920&q=75"
                    alt=""
                />
            </div>
            <h1 id='introduction' className='text-4xl mt-2 text-white'>Introduction</h1>
            <div>
                <h1 className='text-2xl mt-2 text-gray-200 lg:text-justify'>CodeSandbox provides many alternatives for you to code. Each option is
                built to help you focus on what matters: getting the work done without
                friction.</h1>
            </div>
            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />


            <div id='started'>
                <h1 className='text-4xl mt-2 text-white'>Getting Started</h1>
                <div>
                   <h1 className='text-2xl mt-2 text-gray-200 lg:text-justify'> To use Coder StackBox, you'll first need to create an account on our
                    website. Once you've logged in, you'll be able to create new projects
                    or open existing ones. You can begin coding right away, and Coder
                    StackBox will save your progress as you work.</h1>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />
            <div id='sandbox'>
                <h1 className='text-4xl mt-2 text-white'>Sandbox Editors</h1>
                <div  >
                    <h1 className='text-2xl mt-2 text-gray-200 lg:text-justify'>With CodeSandbox you can import any GitHub repository as a sandbox.
                    An imported sandbox will automatically stay in sync with the GitHub repository;
                    if you make a commit to GitHub it will reflect immediately in the sandbox.
                    For that reason we've made GitHub sandboxes immutable,
                    this means that you cannot make direct changes to the sandbox itself.
                    They are treated as templates, so you can fork from them. When you create
                    a fork of a GitHub sandbox we will still keep a reference to the original GitHub repository.</h1>
                </div>
                <img
                    className="rounded-lg my-5"
                    src="https://codesandbox.io/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fupload.e19b0011.jpg&w=1200&q=75"
                    alt=""
                />

            </div>
            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />

            <div id='docker'>
                <h1 className='text-4xl mt-2 text-white font-bold'>Environment</h1>
                <div>
                    <h1 className='text-2xl mt-2 text-gray-200 lg:text-justify'>CodeSandbox has a native integration with Docker. This means that you can use Docker to install any package you want, including databases and new languages. Additionally, with the Docker integration you have root access within your terminals, so you can install packages from the terminal as well. While we call this a Docker integration, we use rootless Podman to run the containers.You can find an example of a sandbox that uses Docker .</h1>
                </div>
            </div>
            <div id='intigra'>
                <h1 className='text-4xl mt-2 text-white font-bold'>Intigration</h1>
                <div>
                    <h1 className='text-2xl mt-2 text-gray-200 lg:text-justify' >A curator is someone in the community who can pick sandboxes
                    for the explore page. You can get an invitation to become a "curator"
                    from staff or other curators. Everyone is applicable to become a curator,
                    but we generally select people that are active on CodeSandbox
                    or are knowledgeable in a specific field (eg. animations).</h1>
                </div>
            </div>

            <div id='trips' className='text-2xl text-gray-200'>
                <h1 className='text-4xl mt-2 text-white font-bold'>Tips and Tricks</h1>
                <ul className='mt-2'>
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

            <div id='work'>
                <div className=''>
                    <div className={`md:text-5xl text-3xl font-bold text-white`}>
                        Workspaces
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl mt-2 text-gray-200 lg:text-justify'>By default, when you set up an account, you will get a free personal workspace.This is a private space to create, prototype and build anything you like.You can think of this workspace as your local development transferred to the cloud.The personal workspace contains any public Sandboxes and Repositories you added while active in your workspace.</h1>
                </div>

                <img
                    className="rounded-lg my-5"
                    src="https://codesandbox.io/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fworkspace-selector.5d0b802d.png&w=2048&q=75"
                    alt=""
                />
            </div>

            <div
                className="bg-gradient-to-r from-accent to-secondary my-5"
                style={{ height: "1px" }}
            />

            <div id='cloud'>
                <h1 className='text-4xl mt-2 text-white font-bold'>Cloud Web Editor</h1>
                <div>
                    <h1 className='text-2xl mt-2 text-gray-200 lg:text-justify'>Our new web editor is part of a larger effort at CodeSandbox to increase the
                    accessibility of complex tools like git, setup,
                    review flows, contributions, and visualizing components.</h1>
                </div>
            </div>
            <div id='team'>
                <h1 className='text-4xl mt-2 text-white font-bold'>Team and access</h1>
                <div className='text-2xl mt-2 text-gray-200'>
                    Our new web editor is part of a larger effort at CodeSandbox to increase the
                    accessibility of complex tools like git, setup,
                    review flows, contributions, and visualizing components.
                </div>
                <div id='plans'>
                    <h1 className='text-4xl mt-2 text-white font-bold'>Plans and Billings</h1>
                    <div className='text-2xl mt-2 text-gray-200'>
                        Our new web editor is part of a larger effort at CodeSandbox to increase the
                        accessibility of complex tools like git, setup,
                        review flows, contributions, and visualizing components.
                    </div>
                </div>

                <div
                    className="bg-gradient-to-r from-accent to-secondary my-5"
                    style={{ height: "1px" }}
                />
                <div id='open-source'>
                    <div className={`md:text-6xl text-4xl font-bold text-white`}>
                        Open Source Collaboration
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl text-gray-200 my-3 lg:text-justify'>Working with your favorite Open Source repositories is easier with CodeSandbox.
                    Whether you are just checking out a repository, testing out an idea or formally
                    proposing a feature, CodeSandbox OS can eliminate tedious steps in
                    your process and get you working on your ideas faster.</h1>
                </div>
                <div className={`md:text-5xl text-3xl font-bold text-white`}>
                    Introducing Contribution Branches
                </div>
                <img
                    className="rounded-lg my-5"
                    src="https://codesandbox.io/docs/_next/image?url=%2Fdocs%2F_next%2Fstatic%2Fmedia%2Fcontribution-branch.39718eb5.jpg&w=1920&q=75"
                    alt=""
                />

            </div>
        </div>
        
);
};

            export default Right;