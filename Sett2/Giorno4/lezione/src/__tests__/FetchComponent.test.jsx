import FetchComponent from "../components/FetchComponent";
import { render, screen, fireEvent } from "@testing-library/react";

describe('Montaggio corretto', () => {
    it('lista iniziale vuota', () => {
        // 1
        render(<FetchComponent />);
        // 2
        const lista = screen.queryAllByTestId('listgroup-item');
        // 4
        expect(lista).toHaveLength(0);
    });

    it('Verifica popolamento con 10 elementi', async () => {
        // 1
        render(<FetchComponent />);
        // 2
        const listaPiena = await screen.findAllByTestId('listgroup-item');
        // 4
        expect(listaPiena).toHaveLength(10);
    });
});

describe('Comportamento del filtro', () => {
    it('restituire un solo elemento in base a una ricerca puntuale', async () => {
        // 1
        render(<FetchComponent />);
        // 2
        const chiaveRicerca = screen.getByPlaceholderText(/Cerca un utente/i);
        // 3
        fireEvent.change(chiaveRicerca, {target: {value: 'lea'}})
        const elencoFiltrato = await screen.findAllByTestId('listgroup-item');
        // 4
        expect(elencoFiltrato.length).toBeLessThanOrEqual(5);
        expect(elencoFiltrato.length).toBeGreaterThan(0);
    });
});

/*
le assertion (expect) più comuni sono:
1) .toBeInTheDocument() -> se l'elemento è presente nel documento
2) .to Be Visible() -> se l'elemento è visibile
3) .toContainHtml([tag html]) -> se l'elemento contiene il tag html specificato
4) .ToBeUndefined() -> se l'elemento è è undefined o meno
5) .toHaveLength([numero]) -> verifica la lunghezza di un array
*/