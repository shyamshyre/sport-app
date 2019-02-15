
'use strict'

var devconfig= require('../components/devconfig')
const testconfig= require('../components/testingconfig')
const prodconfig= require('../components/productionconfig')



const config={
devconfig: Object.assign({}, devconfig),
testconfig: Object.assign({}, testconfig),
prodconfig: Object.assign({}, prodconfig),
 }
module.exports=config