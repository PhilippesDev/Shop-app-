import CareScale from './CareScale';

function PlantItem({ name, cover, id, light, water, isSpecialOffer }) {
    return (
        <li className="lmj-plant-item" id={id}>
            {cover && <img className="lmj-plant-item-cover" src={cover} alt={name} />}
            <strong>{name}</strong>
            <CareScale careType="light" scaleValue={light} />
            <CareScale careType="water" scaleValue={water} />
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
        </li>
    );
}

export default PlantItem;
