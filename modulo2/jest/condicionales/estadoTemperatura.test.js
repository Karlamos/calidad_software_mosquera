const { estadoTemperatura } = require('./estadoTemperatura');

describe('',()=>{
    test('Happy path: 30 => Calor',()=>{
        expect(estadoTemperatura(30)).toBe('Calor');
    })

    test('Happy path: 15=> Templado',()=>{
        expect(estadoTemperatura(15)).toBe('Templado');
    })

    test('Happy path: 2 => Frio',()=>{
        expect(estadoTemperatura(2)).toBe('Frio');
    })

    test('Sad path: temperatura invalida',()=>{
        expect(()=>estadoTemperatura(-1).toThrow('temperatura invalida'));
        expect(()=>estadoTemperatura(-50).toThrow('temperatura invalida'));
    })
})