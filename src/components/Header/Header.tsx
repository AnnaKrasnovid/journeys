import LogoIcon from '../../assets/images/logo.svg';
import BusinessIcon from '../../assets/images/ic_business.svg';
import TripIcon from '../../assets/images/ic_trip.svg';

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <img className="logo logo_header" src={LogoIcon} alt="Logo"/>
            <div className="header__info">
                <div className="header__item">
                    <img className="header__icon" src={BusinessIcon} alt="briefcase"/>
                    <div className="header__container">
                        <h4 className="header__title">Corporate</h4>
                        <span className="header__subtitle">Manage your Bussiness</span>
                    </div>
                </div>
                <div className="header__item">
                    <img className="header__icon" src={TripIcon} alt="tourist"/>
                    <div className="header__container">
                        <h4 className="header__title">Agent</h4>
                        <span className="header__subtitle">Manage your bookings</span>
                    </div>
                </div>
                <button className="button button_type_header">SignUp</button>
            </div>
        </header>
    )
}

export default Header;