const {promediofor} = require('./multiplicacion');

describe('promediofor',()=>{
    test('Happy path: n=[5,5,5]=5',()=>{
        expect(promediofor([5,5,5])).toBe(5);
    })
    test('Happy path: n=[6,6,6]=6',()=>{
        expect(promediofor([6,6,6])).toBe(6);
    })
    test('Sad path: n inválido',()=>{
        expect(()=>promediofor([]).toThrow('no debe estar vacio'));
    })

})