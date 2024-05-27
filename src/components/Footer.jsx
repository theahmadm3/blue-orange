import nileLogoLg from '../assets/images/nilelogolarge.png'
import nileLogoSm from '../assets/images/nilelogosmall.png'

function Footer() {
    return (
        <footer id="contact" className="pa2 pb3 inline-flex justify-between items-center w-100 ba mt3">
            <img src={nileLogoLg} className="w-20 dn-s" />
            <img src={nileLogoSm} className="w-40 dn-ns" />
            <h5 className="b white">Footer</h5>
        </footer>
    )
}

export default Footer
