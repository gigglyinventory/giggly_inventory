'use strict' 
var Product = {

    gigglyfeet: {
        puppyPaw: {
            rdyShipRedPaws,
            rdyShipBluePaws,
            rdyShipBlackPaws,
            rdyShipPaws: rdyShipRedPaws + rdyShipBlackPaws + rdyShipBluePaws,
            redPaws,
            bluePaws,
            blackPaws,
            totalPaws: redPaws + bluePaws + blackPaws,
            getTotalPaws: function () {
                return this.redPaws + this.bluePaws + this.blackPaws;
            },
            setRedPaws: function (redPawsNew) {
                redPaws = redPawsNew;
            },
            getRedPaws: function () {
                return redPaws;
            },
            setBluePaws: function (bluePawsNew) {
                bluePaws = bluePawsNew;
            },
            getBluePaws: function () {
                return bluePaws;
            },
            setBlackPaws: function (blackPawsNew) {
                blackPaws = blackPawsNew;
            },
            getBlackPaws: function () {
                return blackPaws;
            },
            setRdyShipRedPaws: function (newR) {
                this.rdyShipRedPaws = newR;
            },
            getRdyShipRedPaws: function () {
                return this.rdyShipRedPaws;
            },
            setRdyShipBluePaws: function (newB) {
                this.rdyShipBluePaws = newB;
            },
            getRdyShipBluePaws: function () {
                return this.rdyShipBluePaws;
            },
            setRdyShipBlackPaws: function (newBl) {
                this.rdyShipBlackPaws = newBl;
            },
            getRdyShipBlackPaws: function () {
                return this.rdyShipBlackPaws;
            },
            getRdyShipPaws: function () {
                return this.rdyShipPaws;
            }

        },
        totalFeet: puppyPaw.getTotalPaws,
        redFeet: puppyPaw.getRedPaws,
        blueFeet: puppyPaw.getBluePaws,
        blackFeet: puppyPaw.getBlackPaws,
        rdyShipRedFeet: puppyPaw.getRdyShipRedPaws,
        rdyShipBlueFeet: this.puppyPaw.getRdyShipBluePaws,
        rdyShipBlackFeet: this.puppyPaw.getRdyShipBlackPaws,
        rdyShipFeet: puppyPaw.getRdyShipPaws,
        getRdyShipFeet: function () {
            return this.rdyShipFeet;
        },
        getRdyShipRedFeet: function () {
            return this.rdyShipRedFeet;
        },
        getRdyShipBlueFeet: function () {
            return this.rdyShipBlueFeet;
        },
        getRdyShipBlackFeet: function () {
            return this.rdyShipBlackFeet;
        },
        getTotalFeet: function () {
            return this.totalFeet;
        },
        getRedFeet: function () {
            return this.redFeet;
        },
        getBlueFeet: function () {
            return this.blueFeet;
        },
        getBlackFeet: function () {
            return this.blackFeet;
        }

    },
    gigglygrills: {
        truckFront: {
            redTruck,
            blueTruck,
            blackTruck,
            rdyShipRedTruck,
            rdyShipBlueTruck,
            rdyShipBlackTruck,
            rdyShipTruck: rdyShipRedTruck + rdyShipBlueTruck + rdyShipBlackTruck,
            totalTruck: redTruck + blueTruck + blackTruck,
            getTotalTruck: function () {
                return this.redTruck + this.blueTruck + this.blackTruck;
            },
            setRedTruck: function (redT) {
                redTruck = redT;
            },
            getRedTruck: function () {
                return redTruck;
            },
            setBlueTruck: function (blueT) {
                blueTruck = blueT;
            },
            getBlueTruck: function () {
                return blueTruck;
            },
            setBlackTruck: function (blackT) {
                blackTruck = blackT;
            },
            getBlackTruck: function () {
                return blackTruck;
            },
            getRdyShipTruck: function () {
                return this.rdyShipTruck;
            },
            setRdyShipRedTruck: function (newR) {
                this.rdyShipRedTruck = newR;
            },
            getRdyShipRedTruck: function () {
                return this.rdyShipRedTruck;
            },
            setRdyShipBlueTruck: function (newB) {
                this.rdyShipBlueTruck = newB;
            },
            getRdyShipBlueTruck: function () {
                return this.rdyShipBlueTruck;
            },
            setRdyShipBlackTruck: function (newBl) {
                this.rdyShipBlackTruck = newBl;
            },
            getRdyShipBlackTruck: function () {
                return this.rdyShipBlackTruck;
            }
        },
        Noteboard: {
            redNoteboard,
            blueNoteboard,
            blackNoteboard,
            rdyShipRedNoteboard,
            rdyShipBlueNoteboard,
            rdyShipBlackNoteboard,
            rdyShipNoteboard: rdyShipRedNoteboard + rdyShipBlueNoteboard + rdyShipBlackNoteboard,
            totalNoteboard: redNoteboard + blueNoteboard + blackNoteboard,
            getTotalNoteboard: function () {
                return totalNoteboard;
            },
            setRedNoteboard: function (redN) {
                redNoteboard = redN;
            },
            getRedNoteboard: function () {
                return redNoteboard;
            },
            setBlueNoteboard: function (blueN) {
                blueNoteboard = blueN;
            },
            getBlueNoteboard: function () {
                return blueNoteboard;
            },
            setBlackNoteboard: function (blackN) {
                blackNoteboard = blackN;
            },
            getBlackNoteboard: function () {
                return blackNoteboard;
            },
            getRdyShipNoteboard: function () {
                return this.rdyShipNoteboard;
            },
            setRdyShipRedNoteboard: function (newR) {
                this.rdyShipRedNoteboard = newR;
            },
            getRdyShipRedNoteboard: function () {
                return this.rdyShipRedNoteboard;
            },
            setRdyShipBlueNoteboard: function (newB) {
                this.rdyShipBlueNoteboard = newB;
            },
            getRdyShipBlueNoteboard: function () {
                return this.rdyShipBlueNoteboard;
            },
            setRdyShipBlackNoteboard: function (newBl) {
                this.rdyShipBlackNoteboard = newBl;
            },
            getRdyShipBlackNoteboard: function () {
                return this.rdyShipBlackNoteboard;
            }

        },
        redGrills: getRedTruck() + getRedNoteboard(),
        blueGrills: getBlueTruck() + getBlueNoteboard(),
        blackGrills: getBlackTruck() + getBlackNoteboard(),
        rdyShipRedGrills: getRdyShipRedTruck() + getRdyShipRedNoteboard(),
        rdyShipGrills: rdyShipTruck + rdyShipNoteboard,
        totalGrills: redGrills + blueGrills + blackGrills,
        getRdyShipGrills: function () {
            return this.rdyShipGrills;
        }
    },
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