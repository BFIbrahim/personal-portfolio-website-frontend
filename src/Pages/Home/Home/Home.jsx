import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../About/Aboutme';
import Skills from '../Skills/Skills';
import ProjectsSection from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ProjectsSection></ProjectsSection>
        </div>
    );
};

export default Home;