/**
 * Esta función manda una alerta con el resultado del juego
 * @param {Array<Number>} puntosJugadores Arreglo de puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
    if (!puntosJugadores) throw new Error('Se debe pasar un arreglo numérico');

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        const mensaje = (puntosMinimos > 21 ||
            (puntosComputadora > puntosMinimos && puntosComputadora <= 21)) ? 'You lose'
            : (puntosComputadora === puntosMinimos) ? 'Draw'
                : 'You win';

        alert(mensaje);
    }, 100);
}