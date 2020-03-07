'use strict' 
// getRdyShip() {
//     return rdyShipSkins + rdyShipGrills + rdyShipFeet;
// }
class Gigglyfeet{
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
class Gigglygrills{
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
    set rdyShipTruck() {
        this._rdyShipTruck = this._rdyShipRedTruck + this._rdyShipBlueTruck + this._rdyShipBlackTruck
    }
    get rdyShipTruck() {
        return this._rdyShipTruck;
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
    set rdyShipGrills(){
        this._rdyShipGrills = this._rdyShipTruck + this._rdyShipNoteboard
    }
    get rdyShipGrills(){
        return this._rdyShipGrill
    }
    set totalTruck() {
        this._totalTruck = this._redTruck + this._blueTruck + this._blackTruck;
    }
    get totalTruck() {
        return this._totalTruck
    }
    set totalNoteboard() {
        this._totalNoteboard = this._redNoteboard + this._blueNoteboard + this._blackNoteboard
    }
    get totalNoteboard() {
        return this._totalNoteboard
    }
    set totalGrills(){
        this._totalGrills = this._redGrills + this._blueGrills + this._blackGrills
    }
    get totalGrills(){
        return this._totalGrills
    }
}

class gigglyskins{
    set wnderfallSkins2W(fall) {
        this._wonderfallSkins2W = fall;
    }
    get wonderfallSkins2W() {
        return this._wonderfallSkins2W;
    }
    set BarktasticSkins2W(bark) {
        this._barktasticSkins2W = bark;
    }
    get barktasticSkins2W() {
        return this._barktasticSkins2W;
    }
    set patrioticSkins2W(pat) {
        this._patrioticSkins2W = pat;
    }
    get patrioticSkins2W() {
        return this._patrioticSkin2Ws;
    }
    set flowerificSkins2W(flower) {
        this._flowerificSkins2W = flower;
    }
    get flowerificSkins2W() {
        return this._flowerificSkins2W;
    } 
    set militarySkins2W(mil) {
        this._militarySkins2W = mil;
    }
    get militarySkins2W() {
        return this._militarySkins2W;
    }
    set wonderfallSkins4W(fall) {
        this._wonderfallSkins4W = fall;
    }
    get wonderfallSkins4W() {
        return this._wonderfallSkins4W;
    }
    set barktasticSkins4W(bark) {
        this._barktasticSkins4W = bark;
    }
    get arktasticSkins4W() {
        return this._barktasticSkins4W;
    } 
    set patrioticSkins4W(pat) {
        this._patrioticSkins4W = pat;
    } 
    get patrioticSkins4W() {
        return this._patrioticSkins4W;
    } 
    set flowerificSkins4W(flower) {
        this._flowerificSkins4W = flower;
    } 
    get flowerificSkins4W() {
        return this._flowerificSkins4W;
    } 
    set militarySkins4W(mil) {
        this._militarySkins4W = mil;
    } 
    get militarySkins4W() {
        return this._militarySkins4W;
    } 
    set rdyShipWonderfallSkins4W(newR) {
        this._rdyShipWonderfallSkins4W = newR;
    } 
    get rdyShipWonderfallSkins4W() {
        return this._rdyShipWonderfallSkins4W;
    } 
    set rdyShipBarktasticSkins4W(newB) {
        this._rdyShipBarktasticSkins4W = newB;
    } 
    get rdyShipBarktasticSkins4W() {
        return this._rdyShipBarktasticSkins4W;
    } 
    set rdyShipPatrioticSkins4W(newP) {
        this._rdyShipPatrioticSkins4W = newP;
    } 
    get rdyShipPatrioticSkins4W() {
        return this._rdyShipPatrioticSkins4W;
    } 
    set rdyShipFlowerificSkins4W(newF) {
        this._rdyShipFlowerificSkins4W + newF;
    } 
    get rdyShipFlowerificSkins4W() {
        return this._rdyShipFlowerificSkins4W;
    } 
    set rdyShipMilitarySkins4W(newM) {
        this._rdyShipMilitarySkins4W = newM;
    } 
    get rdyShipMilitarySkins4W() {
        return this._rdyShipMilitarySkins4W;
    } 
    set rdyShipWonderfallSkins2W(newW) {
        this._rdyShipWonderfallSkins2W = newW;
    } 
    get rdyShipWonderfallSkins2W() {
        return this._rdyShipWonderfallSkins2W;
    } 
    set rdyShipBarktasticSkins2W(newB) {
        this._rdyShipBarktasticSkins2W = newB;
    } 
    get rdyShipBarktasticSkins2W() {
        return this._rdyShipBarktasticSkins2W;
    } 
    set rdyShipPatrioticSkins2W(newP) {
        this._rdyShipPatrioticSkins2W = newP;
    } 
    get rdyShipPatrioticSkins2W() {
        return this._rdyShipPatrioticSkins2W;
    } 
    set rdyShipFlowerificSkins2W(newF) {
        this._rdyShipFlowerificSkins2W = newF;
    } 
    get rdyShipFlowerificSkins2W() {
        return this._rdyShipFlowerificSkins2W;
    } 
    set rdyShipMilitarySkins2W(newM) {
        this._rdyShipMilitarySkins2W = newM;
    } 
    get rdyShipMilitarySkins2W() {
        return this._rdyShipMilitarySkins2W;
    }
    set totalSkins(){
        this._totalSkins = this._wonderfallSkins + this._barktasticSkins + this._patrioticSkins + this._flowerificSkins + this._militarySkins
    }
    get totalSkins(){
        return this._totalSkins
    }
    set rdyShipSkins(){
        this._rdyShipSkins = this._rdyShipWonderfallSkins4W + this._rdyShipBarktasticSkins4W + this._rdyShipPatrioticSkins4W + this._rdyShipFlowerificSkins4W + this._rdyShipMilitarySkins4W + this._rdyShipWonderfallSkins2W + this._rdyShipBarktasticSkins2W + this._rdyShipPatrioticSkins2W + this._rdyShipFlowerificSkins2W + this._rdyShipMilitarySkins2W
    }
    get rdyShipSkins() {
        return this._rdyShipSkins;
    }
} 
