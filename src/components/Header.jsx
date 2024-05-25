function Header() {
    return (
        <header className="pa2 inline-flex justify-between items-center w-100 bg-blue">
            <h1 className="f3 b white">Project Blue Orange</h1>
            <div className="dn-s">
                <a href="#about" className="f4 white pa3 link dim hover-bg-black hover-white">About</a>
                <a href="#projects" className="f4 white pa3 link dim hover-bg-black hover-white">Projects</a>
                <a href="#contact" className="f4 white pa3 link dim hover-bg-black hover-white">Contact</a>
                <a href="#students" className="f4 white pa3 link dim hover-bg-black hover-white">Students</a>
            </div>
        </header>
    )
}

export default Header
