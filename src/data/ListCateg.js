import { plantList } from "./plantList";


export const categories = plantList.reduce((categoriesnow, plant) => {

    const categorie = plant.category;

    if (!categoriesnow.includes(categorie)) { categoriesnow.push(categorie) }

    return categoriesnow

}, [])

