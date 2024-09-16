"use strict";

class TotalSupplyOfBitcoin {
    constructor() {
        this.totalBitcoin = 21e6; // Suministro máximo de Bitcoin.
        this.halvings = 32; // Total de halvings a ocurrir.
        this.numberBitcoinPerBlock = 50; // Número de bitcoins emitidos por bloque inicialmente.
        this.numberBitcoinHalvings = 21e4; // Número de bloques entre halvings.
        this.cumulativeHalvings = Math.pow(2, 0); // Acumulación de halvings.
        this.acumulado = 0; //suma de todos los bitcoin.
        this.contyear = 2008; //Iincializador de anio
        this.outputElement = document.getElementById('output'); // Elemento para mostrar la salida
    }

    appendOutput(text) { //mostrar elementos en el navegador
        this.outputElement.textContent += text + '\n';
    }

    calculateSupply() {
        for (let i = 0; i <= this.halvings; i++) { //Halving
            this.cumulativeHalvings = Math.pow(2, i);
            let recompensaBloque = this.numberBitcoinPerBlock / this.cumulativeHalvings;
            let bloquesHastaAhora = this.numberBitcoinHalvings * recompensaBloque;
            this.rewardInitial = (this.numberBitcoinPerBlock / (this.cumulativeHalvings));

            if (i >= 25) {
                bloquesHastaAhora = parseFloat(bloquesHastaAhora.toFixed(8)); // Más precisión para halvings altos.
                this.rewardInitial = this.rewardInitial.toFixed(8)
            } else {
                bloquesHastaAhora = Math.round(bloquesHastaAhora);
            }

            // Cálculos acumulados
            this.acumulado += bloquesHastaAhora;

            let porcentajeMinado = (this.acumulado / this.totalBitcoin) * 100;
            let satsConversion = bloquesHastaAhora * 1e8;

            if (this.contyear === 2008) {
                this.appendOutput(`Bloque Génesis ${this.contyear}:`);
            } else {
                this.appendOutput(`Halving ${this.contyear}:`);
            }

            this.appendOutput(`Recompensa por bloque: ${bloquesHastaAhora} BTC = (${satsConversion} SATS)`);
            this.appendOutput(`Suministro acumulado total: ${Math.round(this.acumulado)} BTC`);
            this.appendOutput(`Porcentaje minado: ${porcentajeMinado.toFixed(2)}%`);
            this.appendOutput(`- Block Reward: ${this.rewardInitial}`);
            this.appendOutput("");
            this.appendOutput("____________________________________________________________________");
            this.appendOutput("");

            this.contyear += 4;
        }

        this.acumulado = Math.floor(this.acumulado);
        this.appendOutput(`Suministro total minado: ${Math.round(this.acumulado)} BTC`);
    }
}

const calculate = new TotalSupplyOfBitcoin();
calculate.calculateSupply(); //convocacion al metodo principal

