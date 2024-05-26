import { Link } from "react-router-dom"
import nileLogoLg from '../assets/images/nilelogolarge.png'
import nileLogoSm from '../assets/images/nilelogosmall.png'

function Header() {
    return (
        <header className="z-5 pa2 inline-flex justify-between items-center w-100 center bg-white pl5-l pr5-l sticky top-0">
            <Link to="/" className="outline-0 link black" style={{outline:'none'}}>
                <img src={nileLogoLg} className="w-40 dn-s" />
                <img src={nileLogoSm} className="w-40 dn-ns" />
            </Link>
            <div className="dn-s">
                <Link to="/#about" className="f4 black pa3 link dim">About</Link>
                <Link to="/#projects" className="f4 black pa3 link dim">Projects</Link>
                <Link to="/#contact" className="f4 black pa3 link dim">Contact</Link>
                <Link to="/#students" className="f4 black pa3 link dim">Students</Link>
            </div>
        </header>
    )
}

export default Header
