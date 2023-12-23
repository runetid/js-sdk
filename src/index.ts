const sayHello = function(name: string): void {
    console.log('hello ' + name + "!")
}

const dto = {
    organization: 'runet',
    hasFrontend: true
}

module.exports = {
    sayHello,
    dto
}