import * as Big from  'big.js'

function add(x: number, y: number): number{
    return Big(x).add(y).toNumber()
}

export default add