"use strict"

function Pessoa() {

    this.idade = 0

    setInterval(() => {
        console.log(this.idade++)
    }, 2000);

}

const p1 = new Pessoa()


function Tempo() {
    this.tempo = 0

    var mytimer = setInterval(() => {
        let number = this.tempo--
        console.log(number)
        if(number == 0){
            clearInterval(mytimer)
        }
    }, 200);
}
