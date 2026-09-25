import { categories } from "@/data/ListCateg";

function CategoriesDisplay()
{
    return <>
    
        <h3>Liste des categories</h3>
        <ul>
            {
                categories.map((category, index) => <li key={`${category}-${index}`}>{category}</li>)
            }
        </ul>

    </>
}

export default CategoriesDisplay