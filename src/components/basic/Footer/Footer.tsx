import Information from '../../project/Information/Information';
import SocialIcons from '../../project/SocialIcons/SocialIcons';

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer" aria-label="footer">
            <Information />
            <div className="footer__social">
                <SocialIcons />
                <p className="footer__copyright">Copyright 2021, All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;