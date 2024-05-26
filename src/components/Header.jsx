import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="z-5 pa2 inline-flex justify-between items-center w-100 center bg-dark-blue pl5-l pr5-l sticky top-0">
            <Link to="/" className="link black"><h1 className="f3 b white">Project Blue Orange</h1></Link>
            <div className="dn-s">
                <Link to="#about" className="f4 white pa3 link dim hover-bg-black hover-white">About</Link>
                <Link to="#projects" className="f4 white pa3 link dim hover-bg-black hover-white">Projects</Link>
                <Link to="#contact" className="f4 white pa3 link dim hover-bg-black hover-white">Contact</Link>
                <Link to="#students" className="f4 white pa3 link dim hover-bg-black hover-white">Students</Link>
            </div>
        </header>
    )
}

export default Header
