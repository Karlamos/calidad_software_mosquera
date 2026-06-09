const { puedeConducir } = require('./puedeConducir');

describe('puedeConducir',()=>{
    test('Happy path: 20 => Si',()=>{
        expect(puedeConducir(20)).toBe('Si');
    })

    test('Happy path: 16 => No',()=>{
        expect(puedeConducir(16)).toBe('No');
    })

    test('Sad path: edad invalida',()=>{
        expect(()=>puedeConducir(-1).toThrow('edad invalida'));
        expect(()=>puedeConducir('18').toThrow('edad invalida'));
    })
})