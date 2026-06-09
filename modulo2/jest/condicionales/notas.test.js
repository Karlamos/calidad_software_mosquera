const { notas } = require('./notas');

describe('notas',()=>{
    test('Happy path: 10 => Aprobado',()=>{
        expect(notas(8)).toBe('Aprobado');
    })

    test('Happy path: 16 => Supletorio',()=>{
        expect(notas(5)).toBe('Supletorio');
    })

    test('Happy path: 2 => Reprobado',()=>{
        expect(notas(2)).toBe('Reprobado');
    })

    test('Sad path: edad invalida',()=>{
        expect(()=>puedeConducir(-1).toThrow('edad invalida'));
        expect(()=>puedeConducir('18').toThrow('edad invalida'));
    })
})