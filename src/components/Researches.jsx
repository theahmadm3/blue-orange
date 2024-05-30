import { useEffect, useRef } from 'react';
import image1 from '../assets/images/research1.jpg';
import image2 from '../assets/images/research2.jpg';
import image3 from '../assets/images/research3.jpg';
import '../index.css';

function Researches() {
    const images = [image1, image2, image3];
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const imageContainers = section.querySelectorAll('.image-container');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.1,
        });

        imageContainers.forEach(container => {
            observer.observe(container);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="pa2 overlay flex flex-column justify-between" id="projects" ref={sectionRef}>
            <h1 className="w-100 tc white section-fade-in image-container">Some of our Research</h1>
            <div className="mt2 shadow-1 pa1 br3 mb2 pb2 overflow-auto inline-flex justify-between" style={{ minHeight: '400px' }}>
                {images.map((research, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${research})`,
                            height: '400px',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                        className="flex-shrink-0 mr2 br3 w-30-l w-60-m w-80 image-container"
                    ></div>
                ))}
            </div>
        </section>
    );
}

export default Researches;
