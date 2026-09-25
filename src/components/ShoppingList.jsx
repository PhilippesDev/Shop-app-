import { plantList } from '@/data/plantList.js';
import CategoriesDisplay  from './Categories_display';
import '../styles/ShoppingList.css';

function ShoppingList() {

    return (
        <div>
            <CategoriesDisplay />

            <div>   
                <h2>Liste des plantes</h2>
                <ul className="lmj-plant-list">
                    {
                        plantList.map((plant) => (
                            <li className="lmj-plant-item" key={plant.id}>
                                {plant.name}
                                {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                                </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
    
}

export default ShoppingList