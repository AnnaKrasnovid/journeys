import MouseMoveBox from '../../../ui/MouseMoveBox/MouseMoveBox';
import CardDestination from '../../project/CardDestination/CardDestination';
import Heading from '../../project/Heading/Heading';

import { cardDestinationList } from '../../../assets/appData/cardDestinationList';

import './SectionDestinations.scss';

function SectionDestinations() {

    return (
        <section className="destinations">
            <Heading
                title='Popular Destinations'
                subtitle='It is a long established fact that a reader will be distracted by the readable
                    content of a page when looking at its layout.'
            />
            <MouseMoveBox >
                <ul className="destinations__container-cards" >
                    {cardDestinationList.map((item, index) => (
                        <li className="destinations__item" key={index}>
                            <CardDestination item={item} />
                        </li>
                    ))}
                </ul>
            </MouseMoveBox>
        </section>
    )
}

export default SectionDestinations;