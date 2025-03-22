import { acumularPuntos, crearCarta, determinarGanador, pedirCarta } from './';

// Turno de la computadora
/**
 * Esta función genera cartas para la computadora a fin de intentar ganar al jugador
 * @param { Number } puntosMinimos Puntos mínimos para que la computadora gane
 * @param { HTMLElement } puntosHTML Elemento que abarcará los puntos 
 * @param { HTMLElement } divCartasJugador Elemento donde se mostrarán las cartas de la computadora
 * @param { Array<String> } deck Baraja de cartas
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasJugador, deck = []) => {
    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!deck) throw new Error('Deck es necesario');

    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener');

    let puntosComputadora = 0;

    btnPedir.disabled = btnDetener.disabled = true;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosComputadora, puntosHTML);
        crearCarta(carta, divCartasJugador);

        if (puntosMinimos > 21) break;
    } while ((puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador([puntosMinimos, puntosComputadora]);
}
