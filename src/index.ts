import * as Big from  'big.js'

export const add = function(x: number, y: number): number{
    return Big(x).add(y).toNumber()
}
