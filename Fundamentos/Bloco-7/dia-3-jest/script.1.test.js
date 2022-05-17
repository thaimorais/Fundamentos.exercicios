const sum = require('./funcao-soma')

describe('Exercício 1', () => {
    it('1- O retorno da soma 4, 5 é igual a 9', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    it('3- Erro se um dos parâmetros for string', () => {
        expect(() => { sum(4, '5') }).toThrowError()
        expect(() => { sum(4, '5') }).toThrowError(`parameters must be numbers`)
    });
});