import nileLogoLg from '../assets/images/nilelogolarge.svg'
import nileLogoSm from '../assets/images/nilelogosmall.png'

function Footer() {
    return (
        <footer id="contact" className="pa2 pb3 inline-flex justify-between items-center w-100 ba mt3 bg-dark-blue">
            <img src={nileLogoLg} className="w-40-m w-20-l dn-s" />
            <img src={nileLogoSm} className="w-20 dn-ns" />
            <h5 className="b white">Footer</h5>
        </footer>
    )
}

export default Footer
