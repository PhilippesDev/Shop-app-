import { Fragment } from "react";
import "../styles/Cart.css";



function Cart(){

    const prix_monstera = 8;
    const prix_lierre = 10;
    const prix_bouquet = 15;

    return (
        <Fragment>
            <div className="lmj-cart">
                <h3>Votre panier</h3>

                    <ul>
                        <li>Monstera : {prix_monstera} $</li>
                        <li>Lierre : {prix_lierre} $</li>
                        <li>Bouquet des fleurs : {prix_bouquet} $</li>
                    </ul>
                    <p>Prix Total : {prix_monstera + prix_lierre + prix_bouquet} $</p>
            </div>
        </Fragment>
    )
}

export default Cart