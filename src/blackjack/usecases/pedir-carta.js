/**
 * Esta función me permite tomar una carta
 * @param { Array<String> } deck Se debe enviar la baraja
 * @returns { String } Retorna la última carta de la baraja
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) throw new Error('No hay cartas en el deck');

    return deck.pop();
}