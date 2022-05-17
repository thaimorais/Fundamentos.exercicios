const verificaInformacoes = require('./verificainformacoes.js')

describe('Verifica testes', () => {
    it('Verifica se a função existe', () => {
        expect(verificaInformacoes).toBeDefined();
    });
    it('Testa se verificaInformacoes é uma função', () => {
        expect(typeof verificaInformacoes).toBe('function');
    });
    it('Testa se retorna o primeiro nome da ID', () => {
        expect(verificaInformacoes('8579-6', 'firstName')).toBe('Ana')
    });
    it('Testa se retorna o sobrenome da ID', () => {
        expect(verificaInformacoes('8579-6', 'lastName')).toBe('Gates')
    });
    it('Testa se retorna as especilidades da ID', () => {
        expect(verificaInformacoes('8579-6', 'specialities')).toEqual(["UX", "Design"])
    });
    it('Testa se o erro é recebido quando a ID não existe', () => {
        expect( () => { verificaInformacoes('15448-5', 'firstName') }).toThrowError()
    });
    it('Testa se a mensagem de erro `ID não identificada` é exigibida quando a ID não existe', () => {
        expect( () => { verificaInformacoes('15444-5', 'firstName') }).toThrowError(`ID não identificada`)
    });
    it('Testa se o erro é recebido quando a informação não existir', () => {
        expect( () => { verificaInformacoes('8579-6', 'cidade') }).toThrowError()
    });
    it('Testa se a mensagem de erro é exigibida quando a informação não existe', () => {
        expect( () => { verificaInformacoes('8579-6', 'cidade') }).toThrowError(`Informação indisponível`)
    });
});