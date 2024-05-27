import { Link } from "react-router-dom"
import nileLogoLg from '../assets/images/nilelogolarge.svg'
import nileLogoSm from '../assets/images/nilelogosmall.png'

function Header() {
    return (
        <>
            <header className="z-5 pa3 inline-flex justify-between items-center w-100 center bg-white pl5-l pr5-l sticky top-0 bg-dark-blue">
                <Link to="/" className="link" style={{ outline: 'none' }}>
                    <img src={nileLogoLg} className="w-50 dn-s" />
                    <img src={nileLogoSm} className="dn-ns" />
                </Link>
                <div className="dn-s">
                    <Link style={{ outline: 'none' }} to="/#about" className="f4 white pa3 link pointer dim">About</Link>
                    <Link style={{ outline: 'none' }} to="/#projects" className="f4 white pa3 link pointer dim">Researches</Link>
                    <Link style={{ outline: 'none' }} to="/#contact" className="f4 white pa3 link pointer dim">Contact</Link>
                    <Link style={{ outline: 'none' }} to="/#students" className="f4 white pa3 link pointer dim">Candidates</Link>
                </div>
            </header>
        </>
    )
}

export default Header
