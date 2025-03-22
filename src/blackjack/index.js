import { acumularPuntos, crearCarta, crearDeck, pedirCarta, turnoComputadora } from './usecases';

const miModulo = (() => {
    'use strict';

    let deck = [];
    const tipos = ['C', 'D', 'S', 'H'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);

        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = btnDetener.disabled = false;
    }

    // Eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        puntosJugadores[0] = acumularPuntos(carta, puntosJugadores[0], puntosHTML[0]);
        crearCarta(carta, divCartasJugadores[0]);

        if (puntosJugadores[0] >= 21) {
            turnoComputadora(puntosJugadores[0], puntosHTML[1], divCartasJugadores[1], deck);
        }
    });

    btnDetener.addEventListener('click', () => {
        turnoComputadora(puntosJugadores[0], puntosHTML[1], divCartasJugadores[1], deck);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    };
})();