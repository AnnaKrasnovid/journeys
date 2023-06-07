import { useState, useEffect, useRef } from 'react';
import Button from '../../../ui/Button/Button';

import CardImg from '../../../assets/images/destinations-img1.jpg'

import { CardDestinationInt } from '../../../settings/interfaces';

import './CardDestination.scss';

interface CardDestinationItemInt {
    item: CardDestinationInt,
    callback?: ()=> void
}

function CardDestination({ item, callback=()=> {} }:CardDestinationItemInt) {
    return (
        <div className="card-destination">
            <div className="card-destination__container-title">
                <div className="icon-place icon-place_type_destination"></div>
                <h3 className="card-destination__title">{item.title}</h3>
            </div>
            <p className="card-destination__text">{item.text}</p>
            <div className="card-destination__info">
                <span className="card-destination__author">{item.author}</span>
                <div className="card-destination__container-comment">
                    <button className="card-destination__comment"></button>
                    <span className="card-destination__count-comment">{item.comments}</span>
                </div>
                <div className="card-destination__container-like">
                    <button className="card-destination__like"></button>
                    <span className="card-destination__count-like">{item.like}</span>
                </div>
            </div>
            <div className="card-destination__buttons">
                <button className="button button_type_to-share"></button>                
                <Button text='View More' size='middle' border={true} className='button-card-destination' callback={()=> console.log('callback')}/>
            </div>
            <img className="card-destination__picture" src={CardImg} alt={item.title} />
        </div>
    )
}

export default CardDestination;