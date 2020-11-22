function Potion(name) {
    this.type = ['strength', 'agility', 'health']
    this.name = name;

    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

// let a = new Potion('health')
// console.log(a)


module.exports = Potion;

