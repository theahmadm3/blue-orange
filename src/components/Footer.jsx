import nileLogoLg from '../assets/images/nilelogolarge.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <>
            {/* Footer for larger screens */}

            <footer id="contact" className="dn-s white w-100 mt3 bg-dark-blue">
                <div className='inline-flex justify-between w-100  pa5'>

                    <div className='w-60 flex flex-column'>
                        <img src={nileLogoLg} className="w-80-m w-40-l" />
                        <div className='inline-flex mt3 mb2'>
                            <div className='inline-flex w-50'>
                                <div className='pt3'>
                                    <i className='material-icons mr2'>place</i>
                                </div>
                                <address className='pa2'> Plot 681, Cadastral Zone C-OO, Research Institution Area, Jabi Airport Bypass, Abuja FCT, 900001 Nigeria</address>
                            </div>
                            <div className='inline-flex ml2 w-40'>
                                <div className='pt2'>

                                    <i className='material-icons mr2'>phone</i>
                                </div>
                                <a href='tel:+2349169853402' className='link dim white ml2 mb2 mt2'>+234 916 985 3402</a>
                            </div>
                        </div>
                        <div className='bb b--white w-100 mt4'></div>
                        <ul className='inline-flex f4 justify-between w-50 list pa2'>
                            <li>CONTACT</li>
                            <li>Sitemap</li>
                        </ul>
                        <div className='list pl2 pb3 pt3 inline-flex justify-between w-40'>
                            <i className='pointer dim light-gray fab fa-facebook fa-2x'></i>
                            <i className='pointer dim light-gray fab fa-instagram fa-2x'></i>
                            <i className='pointer dim light-gray fab fa-twitter fa-2x'></i>
                            <i className='pointer dim light-gray fab fa-youtube fa-2x'></i>
                        </div>
                    </div>
                    <div className='w-40 tc'>
                        <p>NILE TV</p>
                    </div>
                </div>
                <div className='w-100 bg-blue white pa2 pl5-l pb3 dn-s'>
                    <p>© 2024 NILE UNIVERSITY</p>
                </div>
            </footer>


            {/* Footer for small screens */}

            <footer className="dn-ns white pt4 flex flex-column justify-between w-100 bg-dark-blue">
                <img src={nileLogoLg} className="w-90 ml2" />
                <h2 className='w-100 tc'>Quick Links</h2>
                <ul className='flex flex-column w-100 tc list pt0 pa2'>
                    <li>NILE TV</li>
                    <li>CONTACT</li>
                    <li>Sitemap</li>
                </ul>
                <h2 id="contactus" className='w-100 tc'>Contact US</h2>
                <div className='inline-flex pl3 pr3 w-100'>
                    <div className='pt3'>
                        <i className='material-icons mr2'>place</i>
                    </div>
                    <address className='pa2'> Plot 681, Cadastral Zone C-OO, Research Institution Area, Jabi Airport Bypass, Abuja FCT, 900001 Nigeria</address>
                </div>
                <div className='inline-flex pl3 pr3 mt2 w-100'>
                    <div className='pt2'>
                        <i className='material-icons mr2'>phone</i>
                    </div>
                    <a href='tel:+2349169853402' className='link dim white ml2 mb2 mt2'>+234 916 985 3402</a>
                </div>
                <h2 className='tc'>Social Links</h2>
                <div className='list pl2 pb3 inline-flex justify-around w-50 center mb2'>
                    <i className='pointer fab fa-2x fa-facebook'></i>
                    <i className='pointer fab fa-2x fa-instagram'></i>
                    <i className='pointer fab fa-2x fa-twitter'></i>
                    <i className='pointer fab fa-2x fa-youtube'></i>
                </div>
                <div className='w-100 bg-blue white pa2 pb3'>
                    <p>© 2024 NILE UNIVERSITY</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
