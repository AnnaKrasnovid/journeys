import Heading from '../../project/Heading/Heading';
import Button from '../../../ui/Button/Button';
import CardTour from '../../project/CardTour/CardTour';
import { cardTourList } from '../../../assets/appData/cardTourList';

import './SectionTours.scss';


function SectionTours() {

    const tourList = [
        {
            img: '',

        }
    ]

    return (
        <section className="tour-packages">
            <Heading
                title="Tour Packeges Available"
                subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, a
            galley of type and scrambled it to make a type specimen book."
            />
            <div className="tour-packages__container">
                <Button
                    text='Popular Package'
                    size='large'
                    borderRadius='xlarge'
                    className='button-tour-packages'
                    shadow={false}
                />
                <div className="tour-packages__nav-container">
                    <button className="button button_type_nav button_type_nav-left " type="button"></button>
                    <button className="button button_type_nav button_type_nav-right button_type_nav-active"
                        type="button"></button>
                </div>
            </div>

            <ul className="tour-packages__card-list">
                {cardTourList.map((item, index) => (
                    <li key={index}>
                        <CardTour item={item} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default SectionTours;