// Vogliamo testare l'esistenza di un titolo h1

import App from "../App";
import { render, screen } from "@testing-library/react";

// normalmente i testi vanno inseriti in dei raccoglitori, detti anche suites.abs
// con la libreria @testing-library/jest-dom si creano suite personalizzate di test, dando i nomi che preferiamo

describe('Correct mounting', () => {
    // qui si inseriscono tutti i test che si desidera effettuare. Il test sarà verificare la presenza di un h1
    it('monta correttamente gli heading', () => {
        // qui si eseguono i diversi step del test
        // 1- montaggio di App nel virtual DOM
        render(<App />); // nel browser non accade nulla, succede tutto in memoria RAM
        // 2- ricerca di un h1 tramite il suo contenuto testuale (perché per un utente, se l'h1 c'è ma è vuoto, è ccome se non ci fosse)
        const heading = screen.getByText(/Testing di una app React/i) // con la i si presuppone che l'elemento venga trovato
        // 3- interazione con l'elemento, in questo caso non è necessaria
        // 4- verifica delle aspettative: mi aspetto che l'elemento ci sia, verifico se c'è davvero
        expect(heading).toBeInTheDocument();
    });
});