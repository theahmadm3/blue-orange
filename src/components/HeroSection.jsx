// /src/components/HeroSection.jsx
import { useState, useEffect } from 'react';
import wow from '../assets/images/cvestudents.jpeg';

function HeroSection() {
    const sectionStyles = {
        position: 'relative',
        backgroundImage: `url(${wow})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '485px',
        color: 'white',
        padding: '2rem',
    };

    const overlayStyles = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
        zIndex: 1,
    };

    const contentStyles = {
        position: 'relative',
        zIndex: 2,
    };

    const [showHeading1, setShowHeading1] = useState(false);
    const [showHeading2, setShowHeading2] = useState(false);

    useEffect(() => {
        setShowHeading1(true);
        const timer = setTimeout(() => {
            setShowHeading2(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="w-100 pa2 pb4" id='home' style={sectionStyles}>
            <div style={overlayStyles}></div>
            <div style={contentStyles}>
                <h1 className={`fade-in ${showHeading1 ? 'visible' : 'hidden'}`}>
                    PhD Lab <br /> Civil Engineering PhD Candidates
                </h1>
                <h2 className={`fade-in ${showHeading2 ? 'visible' : 'hidden'}`}>
                    Meet Our Talented Researchers...
                </h2>
            </div>
        </section>
    );
}

export default HeroSection;
