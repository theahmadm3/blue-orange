import image1 from '../assets/images/research1.jpg';
import image2 from '../assets/images/research2.jpg';
import image3 from '../assets/images/research3.jpg';

function Researches() {
    const images = [image1, image2, image3];

    return (
        <section className="pa2 flex flex-column justify-between" id="projects">
            <h2 className="w-100 tc">Our Projects</h2>
            <div className="mt2 mb2 pb2 overflow-auto inline-flex justify-between" style={{ minHeight: '400px' }}>
                {images.map((research, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundImage: `url(${research})`,
                            height: '670px', // Adjust height as needed
                            backgroundSize: 'cover', // Ensure image covers the div
                            backgroundPosition: 'center', // Center the image
                        }}
                        className="flex-shrink-0 mr2 br3 bg-green w-30-l w-60-m w-80"
                    ></div>
                ))}
            </div>
        </section>
    );
}

export default Researches;
