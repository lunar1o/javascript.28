
class Animal {

    constructor(especie){
        this.especie = especie
    }

    falar(){
        console.log(this.especie + ' fala ')
    }

    comer(){
        console.log(this.especie + ' come ')
    }

    dormir(){
        console.log(this.especie + ' dorme ')
    }

}

export default class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' fala au au au')
    }

    comer(){
        console.log(this.especie + ' come ração ')
    }
}

    }
}

export class Gato extends Animal{
    falar(){
        console.log(this.especie + ' fala Miau')
    }

    comer(){
        console.log(this.especie + ' come peixe ')
    }
}

export class Passaro extends Animal{
    falar(){
        console.log(this.especie + ' fala Piu Piu')
    }

    comer(){
        console.log(this.especie + ' come Alpiste ')
    }
}

