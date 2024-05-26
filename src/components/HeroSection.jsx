import { useState, useEffect } from 'react';

import wow from '../assets/images/cvestudents.jpeg'
function HeroSection() {
    const sectionStyles = {
        backgroundImage: `url(${wow})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '450px',
    }
    // const images = [
    //     'https://example.com/image1.jpg',
    //     'https://example.com/image2.jpg',
    //     'https://example.com/image3.jpg',
    //     'https://example.com/image4.jpg',
    //     'https://example.com/image5.jpg',
    // ];

    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 5000); // Change image every 5 seconds
    //     return () => clearInterval(interval);
    // }, [images.length]);
    const [showHeading1, setShowHeading1] = useState(false);
    const [showHeading2, setShowHeading2] = useState(false);

    useEffect(() => {
        // Show h1 after component mounts
        setShowHeading1(true);

        // Show h2 after a delay
        const timer = setTimeout(() => {
            setShowHeading2(true);
        }, 2000);

        // Cleanup timer if component unmounts before the timer ends
        return () => clearTimeout(timer);
    }, []);

    return (
        
            <section
                className="w-100 flex flex-column justify-center"
                id='home'
                style={sectionStyles}
            >
                <div className="overlay vh-75 pl5-l pt5-l">
                        <h1 className={`fade-in white ${showHeading1 ? 'visible' : 'hidden'}`}>
                            PhD Lab
                        </h1>
                        <h1 className={`fade-in white ${showHeading1 ? 'visible' : 'hidden'}`}>
                            Civil Engineering PhD Candidates
                        </h1>
                        <h2 className={`fade-in white ${showHeading2 ? 'visible' : 'hidden'}`}>
                            Meet Our Talented Researchers...
                        </h2>
                </div>
            </section>
        
    );
}

export default HeroSection;
