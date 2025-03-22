
/**
 * Esta función obtiene el valor de la carta
 * @param {String} carta Ejemplo: "9S"
 * @returns {Number} Retorna el valor de la carta pedida
 */
export const valorCarta = (carta) => {
    if (!carta || carta.length === 0) throw new Error('Se debe enviar una carta');

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ? // NaN: Not a Number => Valida si la variable no es un número
        (valor === 'A') ? 11 : 10
        : valor * 1;
}