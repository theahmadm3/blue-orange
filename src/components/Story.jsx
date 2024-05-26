import aboutImage from '../assets/images/structurediagram.jpeg'

function Story() {
    const aboutStyles = {
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '400px',
    }

    return (
        <section id='about' className="w-100 white"
            style={aboutStyles}
        >
            <div className="overlay vh-75 pl5-l pt5-l" style={{ minHeight: '400px' }}>
                <h1 className="tc w-100">About Us</h1>
                <p className='f3 pa2 pb4'>
                    On a base level, the Ph.D. is an arduous, intense process through which students will gain expertise in their specialized field by conducting independently any original research of great significance. Students work on leading research projects that transcend the boundaries of disciplines, ranging from molecular biology to artificial intelligence and social sciences to humanities. They work closely with faculty advisors in leading innovative solutions to complex problems in continuing to create new knowledge and progress in their spheres. In general, the intended research is interdisciplinary, and its major goals are defined in real-life problem-solving and ensuring the development of science and a professional career.
                </p>
            </div>
        </section>
    )
}

export default Story
