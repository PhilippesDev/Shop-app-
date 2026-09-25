import { plantList } from '@/data/plantList.js';
import CategoriesDisplay  from './Categories_display';

function ShoppingList() {

    return (
        <div>
            <CategoriesDisplay />

            <div>   
                <h2>Liste des plantes</h2>
                <ul>
                    {
                        plantList.map((plant) => (
                            <li key={plant.id}>{plant.name}{plant.isBestSale ? ' (Meilleure vente)' : ''}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
    
}

export default ShoppingList