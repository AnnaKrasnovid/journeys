import Button from '../../../ui/Button/Button';

import { CardTourItemInt } from '../../../settings/interfaces';

import './CardTour.scss';

interface CardTourInt {
    item: CardTourItemInt
}

function CardTour({ item }: CardTourInt) {
    return (
        <div className="card-tour">
            <div className="card-tour__item">
                <img className="card-tour__place" alt={item.location} src={item.img} />
                <div className="star">
                    <span className="star__icon"></span>
                    <p className="star__estimation">{item.estimation}</p>
                </div>
                <p className="cost">$ {item.cost}</p>
            </div>
            <h3 className="card-tour__title">{item.title}</h3>
            <div className="card-tour__info">
                <div className="card-tour__box">
                    <div className="icon-place icon-place_type_card-tour"></div>
                    <p className="card-tour__text">{item.location}</p>
                </div>
                <div className="card-tour__box">
                    <div className="card-tour__icon"></div>
                    <p className="card-tour__text">{item.days}</p>
                </div>
                <Button text='View Details' size='small' borderRadius='large' shadow={false} />
            </div>
        </div>
    )
}

export default CardTour;