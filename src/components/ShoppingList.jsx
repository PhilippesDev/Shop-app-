import { plantList } from '@/data/plantList.js';
import CategoriesDisplay  from './Categories_display';

function ShoppingList() {

    return (
        <div>
            <CategoriesDisplay />
            <ul>
                {
                    plantList.map((plant, index) => (
                        <li key={`${plant}-${index}`}>{plant}</li>
                    ))
                }
            </ul>
        </div>
    );
    
}

export default ShoppingList