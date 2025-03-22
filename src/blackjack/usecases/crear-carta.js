/**
 * Esta función genera una carta en el div del jugador correspondiente
 * @param { String } carta Ejemplo: "8C"
 * @param { HTMLElement } divCartasJugador Elemento HTML donde se dibujarán las cartas pedidas
 */
export const crearCarta = (carta, divCartasJugador) => {
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;
    divCartasJugador.append(imgCarta);
}