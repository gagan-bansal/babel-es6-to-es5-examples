const {Person} = require('../dist/class-export.js')
const me = new Person()
me.speak().then(console.log).catch(console.error)
