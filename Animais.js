class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    emitirSom() {
        console.log(`${this.nome}, o cachorro da raça ${this.raca}, está latindo!`);
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);
        this.cor = cor;
    }

    emitirSom() {
        console.log(`${this.nome}, o gato de cor ${this.cor}, está miando!`);
    }
}

const cachorro1 = new Cachorro('Rex', 5, 'Labrador');
const cachorro2 = new Cachorro('Max', 3, 'Bulldog');
const gato1 = new Gato('Mingau', 2, 'Branco');
const gato2 = new Gato('Garfield', 3, 'Laranja');

cachorro1.emitirSom();
cachorro2.emitirSom();
gato1.emitirSom();
gato2.emitirSom();