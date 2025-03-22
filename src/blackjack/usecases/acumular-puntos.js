import { valorCarta } from './';

/**
 * Esta función acumula los puntos del jugador especificado
 * @param { String } carta Ejemplo: "AH"
 * @param { Number } puntoJugador Puntos del jugador antes de agregar el valor de la carta
 * @param { HTMLElement } puntoHTML Elemento donde se plasmarán los puntos acumulados
 * @returns { Number } Puntos del jugador más el valor de la carta
 */
export const acumularPuntos = (carta, puntoJugador, puntoHTML) => {
    puntoJugador += valorCarta(carta);
    puntoHTML.innerText = puntoJugador;
    return puntoJugador;
}