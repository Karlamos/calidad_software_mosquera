const {sumaHasta} = require('./sumaHasta');

describe('Suma Hasta',()=>{
    test('Happy path: n=5=>15',()=>{
        expect(sumaHasta(5)).toBe(15);
    })
    test('Happy path: n=1=>1',()=>{
        expect(sumaHasta(5)).toBe(15);
    })
    test('Sad path: n inválido',()=>{
        expect(()=>sumaHasta(0).toThrow('n debe ser entero'));
        expect(()=>sumaHasta(2.6).toThrow('n debe ser entero'));
        expect(()=>sumaHasta('10').toThrow('n debe ser entero'));
    })

})