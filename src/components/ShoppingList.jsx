import { plantList } from '@/data/plantList.js';
import CategoriesDisplay  from './Categories_display';
import PlantItem from './PlantItem';
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
                            <PlantItem
                                key={plant.id}
                                id={plant.id}
                                name={plant.name}
                                cover={plant.cover}
                                light={plant.light}
                                water={plant.water}
                                isSpecialOffer={plant.isSpecialOffer}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
    
}

export default ShoppingList