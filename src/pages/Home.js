import React from 'react';
import Investors from '../components/Investors';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Founders from '../components/founders';
import Blogs from '../components/Blogs';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Blogs />
            <Founders/>
            <Investors />
            <Footer />
        </>

    )
}

export default Home;

