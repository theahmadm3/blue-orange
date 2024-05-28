import nileLogoLg from '../assets/images/nilelogolarge.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <>
            <footer id="contact" className="dn-s inline-flex justify-between w-100 ba mt3 bg-dark-blue">
                <img src={nileLogoLg} className="w-40-m w-20-l w-50" />
                <h5 className="b white">Footer</h5>
            </footer>
            <footer className="dn-ns white pt3 flex flex-column justify-between w-100 bg-dark-blue">
                <img src={nileLogoLg} className="w-40-m w-20-l w-50 ml2" />
                <h2 className='pa2'>Quick Links</h2>
                <ul className='flex flex-column list pa2'>
                    <li>NILE TV</li>
                    <li>CONTACT</li>
                    <li>Sitemap</li>
                </ul>
                <h2 id="contact" className='pa2'>Contact US</h2>
                <i className='material-icons ml2'>map</i>
                <address className='pa2'>Plot 681, Cadastral Zone C-OO, Research Institution Area, Jabi Airport Bypass, Abuja FCT, 900001 Nigeria</address>
                <i className='material-icons ml2'>phone</i>
                <a href='tel:+2349169853402' className='link white dim ml2 mb2 mt2'>+234 916 985 3402</a>
                <h2 className='pa2'>Social Links</h2>
                <div className='list pl2 pb3 inline-flex justify-between w-40'>
                    <i className='pointer fab fa-facebook'></i>
                    <i className='pointer fab fa-instagram'></i>
                    <i className='pointer fab fa-twitter'></i>
                    <i className='pointer fab fa-youtube'></i>
                </div>
                <div className='w-100 bg-blue white pa2 pb4'>
                    <p>© 2024 NILE UNIVERSITY</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
