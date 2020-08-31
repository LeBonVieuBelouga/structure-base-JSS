/**
 * Modèle JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

// http://www.jslint.com/help.html
/*jslint this:true */
/*jslint es6, browser, devel, for, single, multivar*/
/*global window, document, alert, performance */

(function main() {
    "use strict"; // Demande un interprétation stricte du code

    let a = "Bonjour";

    const prenom = prompt("Entrez votre prénom :");

    alert(`Bonjour, ${prenom}`);

    const tempCel = prompt("Température en celcius:");
    const tempFar = tempCel*9/5+32;
    alert(`${tempCel} C, ${tempFar} F`);
}()); // Main IIFE

