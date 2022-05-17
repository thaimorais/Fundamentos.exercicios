const myFizzBuzz = require('./myfizzbuzz')

describe('Exercicio 3', () => {
    it('O número é divisível por 3 e 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    });
    it('O número é divisível por 3', () => {
        expect(myFizzBuzz(18)).toEqual('fizz')
    });
    it('O número é divisível por 5', () => {
        expect(myFizzBuzz(10)).toEqual('buzz')
    });
    it('O número não é divisível por 3 nem por 5', () => {
        expect(myFizzBuzz(13)).toEqual(13)
    });
    it('Retorna false se o paramêtro não for numérico', () => {
        expect(myFizzBuzz('string')).toEqual(false)
    });
});