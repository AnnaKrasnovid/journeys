import InIcon from '../../assets/images/in.svg';
import InstagramIcon from '../../assets/images/instagram.svg';
import YoutubeIcon from '../../assets/images/youtube.svg';
import TwitterIcon from '../../assets/images/twitter.svg';
import FacebookIcon from '../../assets/images/facebook.svg';

import { links } from '../../assets/appData/links';

import './SocialIcons.scss';

function SocialIcons() {
    const socialNetwork = [
        { icon: InIcon, link: links.IN, },
        { icon: InstagramIcon, link: links.INSTAGRAM, },
        { icon: YoutubeIcon, link: links.YOUTUBE, },
        { icon: TwitterIcon, link: links.TWITTER, },
        { icon: FacebookIcon, link: links.FASEBOOK, },
    ]

    return (
        <ul className="social-icon">
            {socialNetwork.map((item, index) => (
                <li className="social-icon__point" key={index}>
                    <a className="social-icon__link" href={item.link} target='_blank'>
                        <img src={item.icon} alt="in" />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SocialIcons;