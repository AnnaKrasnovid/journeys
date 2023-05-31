import LogoIcon from '../../assets/images/logo.svg';

import './Information.scss';

interface LinkInt {
    link: string,
    title: string
}

interface FooterLinksInt {
    title: string,
    links: Array<LinkInt>
}

function Information() {
    const footerLinks: Array<FooterLinksInt> = [
        {
            title: 'about us',
            links: [
                { link: '', title: 'Home' },
                { link: '', title: 'Destination' },
                { link: '', title: 'Travel Story' },
                { link: '', title: 'Contact' },
            ]
        },
        {
            title: 'company',
            links: [
                { link: '', title: 'Offers' },
                { link: '', title: 'Privacy Policy' },
                { link: '', title: 'Terms & Conditions' },
                { link: '', title: 'Refund Policy' },
            ]
        },
        {
            title: 'bookings',
            links: [
                { link: '', title: 'Flights' },
                { link: '', title: 'Hotels' },
                { link: '', title: 'Buses' },
                { link: '', title: 'Trains' },
            ]
        },
    ]

    return (
        <div className="information">
            <div className="information__container">
                <img className="logo logo_type_footer" src={LogoIcon} alt="Logo" />
                <p className="information__text">All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>

            {footerLinks.map((item, index) => (
                <nav className="information__container" key={index}>
                    <h4 className="information__title">{item.title}</h4>
                    <ul className="information__list">
                        {item.links.map((i: LinkInt, ind: number) => (
                            <li className="information__info" key={ind}>
                                <a className="information__link" href={i.link}>{i.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    )
}

export default Information;