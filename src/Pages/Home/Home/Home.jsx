import React from 'react';
import Banner from '../Banner/Banner';
import AboutMe from '../About/Aboutme';
import Skills from '../Skills/Skills';
import ProjectsSection from '../Projects/Projects';
import ServiceSection from '../Services/ServiceSection';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ProjectsSection></ProjectsSection>
            <ServiceSection></ServiceSection>
            
        </div>
    );
};

export default Home;