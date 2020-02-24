'use strict' 
//class Product {

class Gigglyfeet{
    //puppyPaw: {
        // rdyShipRedPaws,
        // rdyShipBluePaws,
        // rdyShipBlackPaws,
        // rdyShipPaws: rdyShipRedPaws + rdyShipBlackPaws + rdyShipBluePaws,
        // redPaws,
        // bluePaws,
        // blackPaws,
        // totalPaws: redPaws + bluePaws + blackPaws,
    get totalPaws() {
        return this._redPaws + this._bluePaws + this._blackPaws;
    }
    set redPaws (redPawsNew) {
        this._redPaws = redPawsNew
    }
    get redPaws() {
        return this._redPaws
    }
    set bluePaws(bluePawsNew) {
        this._bluePaws = bluePawsNew
    }
    get bluePaws() {
        return this._bluePaws
    }
    set blackPaws(blackPawsNew) {
        this._blackPaws = blackPawsNew
    }
    get blackPaws() {
        return this._blackPaws
    }
    set rdyShipRedPaws(newR) {
        this._rdyShipRedPaws = newR
    }
    get rdyShipRedPaws() {
        return this._rdyShipRedPaws
    }
    set dyShipBluePaws(newB) {
        this._rdyShipBluePaws = newB
    }
    get rdyShipBluePaws() {
        return this._rdyShipBluePaws
    }
    set rdyShipBlackPaws (newBl) {
        this._rdyShipBlackPaws = newBl
    }
    get rdyShipBlackPaws() {
        return this._rdyShipBlackPaws
    }
    get rdyShipPaws() {
        return this._rdyShipPaws
    }

}
        //totalFeet: puppyPaw.getTotalPaws,
        //redFeet: puppyPaw.getRedPaws,
        //blueFeet: puppyPaw.getBluePaws,
        //blackFeet: puppyPaw.getBlackPaws,
        //rdyShipRedFeet: puppyPaw.getRdyShipRedPaws,
        //rdyShipBlueFeet: this.puppyPaw.getRdyShipBluePaws,
        //rdyShipBlackFeet: this.puppyPaw.getRdyShipBlackPaws,
        //rdyShipFeet: puppyPaw.getRdyShipPaws,
        // getRdyShipFeet: function () {
        //     return this.rdyShipFeet;
        // },
        // getRdyShipRedFeet: function () {
        //     return this.rdyShipRedFeet;
        // },
        // getRdyShipBlueFeet: function () {
        //     return this.rdyShipBlueFeet;
        // },
        // getRdyShipBlackFeet: function () {
        //     return this.rdyShipBlackFeet;
        // },
    //     getTotalFeet: function () {
    //         return this.totalFeet;
    //     },
    //     getRedFeet: function () {
    //         return this.redFeet;
    //     },
    //     getBlueFeet: function () {
    //         return this.blueFeet;
    //     },
    //     getBlackFeet: function () {
    //         return this.blackFeet;
    //     }

    // },
class Gigglygrills{
    // truckFront: {
    //     redTruck,
    //     blueTruck,
    //     blackTruck,
    //     rdyShipRedTruck,
    //     rdyShipBlueTruck,
    //     rdyShipBlackTruck,
    //     rdyShipTruck: rdyShipRedTruck + rdyShipBlueTruck + rdyShipBlackTruck,
    //     totalTruck: redTruck + blueTruck + blackTruck,
    set totalTruck() {
        this._totalTruck = this._redTruck + this._blueTruck + this._blackTruck;
    }
    get totalTruck() {
        return this._totalTruck
    }
    set redTruck(redT) {
        this._redTruck = redT
    }
    get redTruck() {
        return this._redTruck
    }
    set blueTruck(blueT) {
        this._blueTruck = blueT
    }
    get blueTruck() {
        return this._blueTruck
    }
    set blackTruck(blackT) {
        this._blackTruck = blackT
    }
    get blackTruck () {
        return this._blackTruck
    }
    set rdyShipTruck() {
        this._rdyShipTruck = this._rdyShipRedTruck + this._rdyShipBlueTruck + this._rdyShipBlackTruck
    }
    get rdyShipTruck() {
        return this._rdyShipTruck;
    }
    set rdyShipRedTruck(newR) {
        this._rdyShipRedTruck = newR;
    }
    get rdyShipRedTruck() {
        return this._rdyShipRedTruck;
    }
    set rdyShipBlueTruck(newB) {
        this._rdyShipBlueTruck = newB;
    }
    get rdyShipBlueTruck() {
        return this._rdyShipBlueTruck;
    }
    set rdyShipBlackTruck(newBl) {
        this._rdyShipBlackTruck = newBl;
    }
    get rdyShipBlackTruck() {
        return this._rdyShipBlackTruck;
    }
        // }
        // Noteboard: {
        //     redNoteboard,
        //     blueNoteboard,
        //     blackNoteboard,
        //     rdyShipRedNoteboard,
        //     rdyShipBlueNoteboard,
        //     rdyShipBlackNoteboard,
        //     rdyShipNoteboard: rdyShipRedNoteboard + rdyShipBlueNoteboard + rdyShipBlackNoteboard,
        //     totalNoteboard: redNoteboard + blueNoteboard + blackNoteboard,
    set totalNoteboard() {
        this._totalNoteboard = this._redNoteboard + this._blueNoteboard + this._blackNoteboard
    }
    get totalNoteboard() {
        return this._totalNoteboard
    }
    set redNoteboard(redN) {
        this._redNoteboard = redN
    }
    get redNoteboard() {
        return this._redNoteboard
    }
    set blueNoteboard(blueN) {
        this._blueNoteboard = blueN
    }
    get blueNoteboard() {
        return blueNoteboard;
    }
    set blackNoteboard(blackN) {
        this._blackNoteboard = blackN;
    }
    get blackNoteboard() {
        return this._blackNoteboard;
    }
    set rdyShipNoteboard() {
        this._rdyShipNoteboard = this._rdyShipNoteboard + this._rdyShipBlueNoteboard + this._rdyShipBlackNoteboard ;
    }
    get rdyShipNoteboard() {
        return this._rdyShipNoteboard;
    }
    set rdyShipRedNoteboard(newR) {
        this._rdyShipRedNoteboard = newR;
    }
    get rdyShipRedNoteboard() {
        return this._rdyShipRedNoteboard;
    }
    set RdyShipBlueNoteboard(newB) {
        this._rdyShipBlueNoteboard = newB;
    }
    get rdyShipBlueNoteboard() {
        return this._rdyShipBlueNoteboard;
    }
    set rdyShipBlackNoteboard(newBl) {
        this._rdyShipBlackNoteboard = newBl;
    }
    get rdyShipBlackNoteboard() {
        return this._rdyShipBlackNoteboard;
    }

    set redGrills(){
        this._redGrills = this._redTruck + this._redNoteboard
     } 
    get redGrills(){
       return this._redGrills
    } 
    set blueGrills(){
        this._blueGrills = this._blueTruck + this._blueNoteboard
    }
    get blueGrills() {
        return this._blueGrills
    }
    set blackGrills(){ 
        this._blackGrills = this._blackTruck + this._blackNoteboard
    }
    get blackGrills(){ 
        return this._blackGrills
    }
    //Do we need rdyShipBlackGrills and rdyShipBlueGrills??
    set rdyShipRedGrills(){
        this._rdyShipRedGrills = this._rdyShipRedTruck + this._rdyShipRedNoteboard
    } 
    set rdyShipRedGrills(){
        return this._rdyShipRedGrills
    } 
    rdyShipGrills: rdyShipTruck + rdyShipNoteboard,
    totalGrills: redGrills + blueGrills + blackGrills,
    getRdyShipGrills: function () {
        return this.rdyShipGrills;
    }
    }
    gigglyskins: {
        wonderfallSkins4W,
        barktasticSkins4W,
        patrioticSkins4W,
        flowerificSkins4W,
        militarySkins4W,
        wonderfallSkins2W,
        barktasticSkins2W,
        patrioticSkins2W,
        flowerificSkins2W,
        militarySkins2W,
        totalSkins: wonderfallSkins + barktasticSkins + patrioticSkins + flowerificSkins + militarySkins,
        rdyShipWonderfallSkins4W,
        rdyShipBarktasticSkins4W,
        rdyShipPatrioticSkins4W,
        rdyShipFlowerificSkins4W,
        rdyShipMilitarySkins4W,
        rdyShipWonderfallSkins2W,
        rdyShipBarktasticSkins2W,
        rdyShipPatrioticSkins2W,
        rdyShipFlowerificSkins2W,
        rdyShipMilitarySkins2W,
        rdyShipSkins: rdyShipWonderfallSkins4W + rdyShipBarktasticSkins4W + rdyShipPatrioticSkins4W + rdyShipFlowerificSkins4W + rdyShipMilitarySkins4W + rdyShipWonderfallSkins2W + rdyShipBarktasticSkins2W + rdyShipPatrioticSkins2W + rdyShipFlowerificSkins2W + rdyShipMilitarySkins2W,
        setWonderfallSkins2W: function (fall) {
            this.wonderfallSkins2W = fall;
        },
        getWonderfallSkins2W: function () {
            return this.wonderfallSkins2W;
        },
        setBarktasticSkins2W: function (bark) {
            this.barktasticSkins2W = bark;
        },
        getBarktasticSkins2W: function () {
            return this.barktasticSkins2W;
        },
        setPatrioticSkins2W: function (pat) {
            this.patrioticSkins2W = pat;
        },
        getPatrioticSkins2W: function () {
            return this.patrioticSkin2Ws;
        },
        setFlowerificSkins2W: function (flower) {
            this.flowerificSkins2W = flower;
        },
        getFlowerificSkins2W: function () {
            return this.flowerificSkins2W;
        },
        setMilitarySkins2W: function (mil) {
            this.militarySkins2W = mil;
        },
        getMilitarySkins2W: function () {
            return this.militarySkins2W;
        },
        setWonderfallSkins4W: function (fall) {
            this.wonderfallSkins4W = fall;
        },
        getWonderfallSkins4W: function () {
            return this.wonderfallSkins4W;
        },
        setBarktasticSkins4W: function (bark) {
            this.barktasticSkins4W = bark;
        },
        getBarktasticSkins4W: function () {
            return this.barktasticSkins4W;
        },
        setPatrioticSkins4W: function (pat) {
            this.patrioticSkins4W = pat;
        },
        getPatrioticSkins4W: function () {
            return this.patrioticSkins4W;
        },
        setFlowerificSkins4W: function (flower) {
            this.flowerificSkins4W = flower;
        },
        getFlowerificSkins4W: function () {
            return this.flowerificSkins4W;
        },
        setMilitarySkins4W: function (mil) {
            this.militarySkins4W = mil;
        },
        getMilitarySkins4W: function () {
            return this.militarySkins4W;
        },
        setRdyShipWonderfallSkins4W: function (newR) {
            this.rdyShipWonderfallSkins4W = newR;
        },
        getRdyShipWonderfallSkins4W: function () {
            return this.rdyShipWonderfallSkins4W;
        },
        setRdyShipBarktasticSkins4W: function (newB) {
            this.rdyShipBarktasticSkins4W = newB;
        },
        getRdyShipBarktasticSkins4W: function () {
            return this.rdyShipBarktasticSkins4W;
        },
        setRdyShipPatrioticSkins4W: function (newP) {
            this.rdyShipPatrioticSkins4W = newP;
        },
        getRdyShipPatrioticSkins4W: function () {
            return this.rdyShipPatrioticSkins4W;
        },
        setRdyShipFlowerificSkins4W: function (newF) {
            this.rdyShipFlowerificSkins4W + newF;
        },
        getRdyShipFlowerificSkins4W: function () {
            return this.rdyShipFlowerificSkins4W;
        },
        setRdyShipMilitarySkins4W: function (newM) {
            this.rdyShipMilitarySkins4W = newM;
        },
        getRdyShipMilitarySkins4W: function () {
            return this.rdyShipMilitarySkins4W;
        },
        setRdyShipWonderfallSkins2W: function (newW) {
            this.rdyShipWonderfallSkins2W = newW;
        },
        getRdyShipWonderfallSkins2W: function () {
            return this.rdyShipWonderfallSkins2W;
        },
        setRdyShipBarktasticSkins2W: function (newB) {
            this.rdyShipBarktasticSkins2W = newB;
        },
        getRdyShipBarktasticSkins2W: function () {
            return this.rdyShipBarktasticSkins2W;
        },
        setRdyShipPatrioticSkins2W: function (newP) {
            this.rdyShipPatrioticSkins2W = newP;
        },
        getRdyShipPatrioticSkins2W: function () {
            return this.rdyShipPatrioticSkins2W;
        },
        setRdyShipFlowerificSkins2W: function (newF) {
            this.rdyShipFlowerificSkins2W = newF;
        },
        getRdyShipFlowerificSkins2W: function () {
            return this.rdyShipFlowerificSkins2W;
        },
        setRdyShipMilitarySkins2W: function (newM) {
            this.rdyShipMilitarySkins2W = newM;
        },
        getRdyShipMilitarySkins2W: function () {
            return this.rdyShipMilitarySkins2W;
        },
        getRdyShipSkins: function () {
            return this.rdyShipSkins;
        }
    },
    getRdyShip: function () {
        return rdyShipSkins + rdyShipGrills + rdyShipFeet;
    }
};