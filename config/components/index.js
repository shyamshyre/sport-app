
'use strict'

var devconfig= require('../components/devconfig');
const testconfig= require('../components/testingconfig');
const prodconfig= require('../components/productionconfig');
const secretconfig= require('../components/secretconfig');



const config={
devconfig: Object.assign({}, devconfig),
testconfig: Object.assign({}, testconfig),
prodconfig: Object.assign({}, prodconfig),
secretconfig: Object.assign({}, secretconfig),
 }
module.exports=config