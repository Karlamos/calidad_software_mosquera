
const {sumarPares} = require('./sumarPares');

describe('Promedio Array',()=>{
    test('Happy path: n=[5,5,5]=>5',()=>{
        expect(sumarPares([5,5,5])).toBe(0);
    })
    test('Happy path: n=[6,6,6]=>6',()=>{
        expect(sumarPares([6,6,6])).toBe(3);
    })
    test('Happy path: n=[4,5,6,7,8]=>6',()=>{
        expect(sumarPares([4,5,6,7,8])).toBe(3);
    })
    test('Sad path: n inválido',()=>{
        expect(()=>sumarPares(0).toThrow('Arreglo no valido'));
        expect(()=>sumarPares([]).toThrow('Arreglo no valido'));
    })

})