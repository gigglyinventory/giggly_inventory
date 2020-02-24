'use strict'
var RawMaterials = {
    Screws: {
        totalScrews,
        setTotalScrews: function (newS) {
            this.totalScrews = newS;
        },
        getTotalScrews: function () {
            return this.totalScrews;
        },
        screwsLow: function () {
            if (this.totalScrews <= 100) {
                return true;
            } else {
                return false;
            }
        }
    },

    ShippingEnvelopes: {
        totalShippingEnvelopes,
        setTotalShippingEnvelopes: function (newSE) {
            this.totalShippingEnvelopes = newSE;
        },
        getTotalShippingEnvelopes: function () {
            return this.totalShippingEnvelopes;
        },
        shippingEnvelopesLow: function () {
            if (this.totalShippingEnvelopes <= 50) {
                return true;
            } else {
                return false;
            }
        }
    },

    Polybags: {
        totalPolybags,
        setTotalPolybags: function (newP) {
            this.totalPolybags;
        },
        getTotalPolybags: function () {
            return this.totalPolybags;
        },
        polybagsLow: function () {
            if (totalPolybags <= 75) {
                return true;
            } else {
                return false;
            }
        }
    },

    ABSPlastic: {
        ABSPlasticTotal,
        ABSRed,
        ABSBlue,
        ABSBlack,
        setABSTotal: function (newA) {
            this.ABSPlasticTotal = newA;
        },
        getABSTotal: function () {
            return this.ABSPlasticTotal;
        },
        setABSRed: function (newR) {
            this.ABSRed = newR;
        },
        getABSRed: function () {
            return this.ABSRed;
        },
        setABSBlue: function (newB) {
            this.ABSBlue = newB;
        },
        getABSBlue: function () {
            return this.ABSBlue;
        },
        setABSBlack: function (newBl) {
            this.ABSBlack = newBl;
        },
        getABSBlack: function () {
            return this.ABSBlack;
        },
        ABSLow: function () {
            if (this.ABSPlasticTotal <= 40) {
                return true;
            } else {
                return false;
            }
        }
    },

    PuppyFeet: {
        puppyFeetTotal,
        redFeet,
        blueFeet,
        blackFeet,
        setPuppyFeetTotal: function (newP) {
            this.puppyFeetTotal = newP;
        },
        getPuppyFeetTotal: function () {
            return this.puppyFeetTotal;
        },
        setRedFeet: function (newR) {
            this.redFeet = newR;
        },
        getRedFeet: function () {
            return this.redFeet;
        },
        setBlueFeet: function (newB) {
            this.blueFeet = newB;
        },
        getBlueFeet: function () {
            return this.blueFeet;
        },
        setBlackFeet: function (newBl) {
            this.blackFeet = newBl;
        },
        puppyFeetLow: function () {
            if (this.puppyFeetTotal <= 50) {
                return true;
            } else {
                return false;
            }
        }
    },

    Walkers: {
        walker2WTotal,
        walker4WTotal,
        setWalker2WTotal: function (new2w) {
            this.walker2WTotal = new2w;
        },
        getWalker2WTotal: function () {
            return this.walker2WTotal;
        },
        setWalker4WTotal: function (new4w) {
            this.walker4WTotal = new4w;
        },
        getWalker4WTotal: function () {
            return this.walker4WTotal;
        },
        walker2WLow: function () {
            if (this.walker2WTotal <= 50) {
                return true;
            } else {
                return false;
            }
        },
        walker4WLow: function () {
            if (this.walker4WTotal <= 50) {
                return true;
            } else {
                return false;
            }
        }
    },

    Grommets: {
        totalGrommets,
        setTotalGrommets: function (newG) {
            this.totalGrommets = newG;
        },
        getTotalGrommets: function () {
            return this.totalGrommets;
        },
        grommetsLow: function () {
            if (this.totalGrommets <= 100) {
                return true;
            } else {
                return false;
            }
        }
    },

    Velcro: {
        totalVelcro,
        setTotalVelcro: function (newV) {
            this.totalVelcro = newV;
        },
        getTotalVelcro: function () {
            return this.totalVelcro;
        },
        velcroLow: function () {
            if (this.totalVelcro <= 80) {
                return true;
            } else {
                return false;
            }
        }
    },

    VinylRolls: {
        genFormRolls,
        averyDen1105Rolls,
        averyDen1106Rolls,
        laminateRolls,
        setGenFormRolls: function (newGF) {
            this.genFormRolls = newGF;
        },
        getGenFormRolls: function () {
            return this.genFormRolls;
        },
        setAveryDen1105Rolls: function (newA) {
            this.averyDen1105Rolls = newA;
        },
        getAveryDen1105Rolls: function () {
            return this.averyDen1105Rolls;
        },
        setAveryDen1106Rolls: function (newD) {
            this.averyDen1106Rolls = newD;
        },
        getAveryDen1106Rolls: function () {
            return this.averyDen1106Rolls;
        },
        setLaminateRolls: function (newL) {
            this.laminateRolls = newL;
        },
        getLaminateRolls: function () {
            return this.laminateRolls;
        },
        genFormLow: function () {
            if (this.genFormRolls < 2) {
                return true;
            } else {
                return false;
            }
        },
        averyDen1105Low: function () {
            if (this.averyDen1105Rolls < 2) {
                return true;
            } else {
                return false;
            }
        },
        averyDen1106Low: function () {
            if (this.averyDen1106Rolls < 2) {
                return true;
            } else {
                return false;
            }
        },
        laminateLow: function () {
            if (this.laminateRolls < 2) {
                return true;
            } else {
                return false;
            }
        }
    },

    Stickers: {
        truckStickerTotal,
        noteboardStickerTotal,
        redTruckUPCTotal,
        blueTruckUPCTotal,
        blackTruckUPCTotal,
        redPawUPCTotal,
        bluePawUPCTotal,
        blackPawUPCTotal,
        redNoteboardUPCTotal,
        blueNoteboardUPCTotal,
        blackNoteboardUPCTotal,
        wonderfallSkin2wUPCTotal,
        wonderfallSkin4wUPCTotal,
        flowerificSkin2wUPCTotal,
        flowerificSkin4wUPCTotal,
        patrioticSkin2wUPCTotal,
        patrioticSkin4wUPCTotal,
        barktasticSkin2wUPCTotal,
        barktasticSkin4wUPCTotal,
        militarySkin2wUPCTotal,
        militarySkin4wUPCTotal,
        setTruckStickerTotal: function (newT) {
            this.truckStickerTotal = newT;
        },
        getTruckStickerTotal: function () {
            return this.truckStickerTotal;
        },
        truckStickerLow: function () {
            if (this.truckStickerTotal < 50) {
                return true;
            } else {
                return false;
            }
        },
        setNoteboardStickerTotal: function (newN) {
            this.noteboardStickerTotal = newN;
        },
        getNoteboardStickerTotal: function () {
            return this.noteboardStickerTotal;
        },
        noteboardStickerLow: function () {
            if (this.noteboardStickerTotal < 50) {
                return true;
            } else {
                return false;
            }
        },
        setRedTruckUPCTotal: function (newRT) {
            this.redTruckUPCTotal = newRT;
        },
        getRedTruckUPCTotal: function () {
            return this.redTruckUPCTotal;
        },
        redTruckUPCLow: function () {
            if (this.redTruckUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setBlueTruckUPCTotal: function (newBT) {
            this.blueTruckUPCTotal = newBT;
        },
        getBlueTruckUPCTotal: function () {
            return this.blueTruckUPCTotal;
        },
        blueTruckUPCLow: function () {
            if (this.blueTruckUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setBlackTruckUPCTotal: function (newBlT) {
            this.blackTruckUPCTotal = newBlT;
        },
        getBlackTruckUPCTotal: function () {
            return this.blackTruckUPCTotal;
        },
        blackTruckUPCLow: function () {
            if (this.blackTruckUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setRedPawUPCTotal: function (newRP) {
            this.redPawUPCTotal = newRP;
        },
        getRedPawUPCTotal: function () {
            return this.redPawUPCTotal;
        },
        redPawUPCLow: function () {
            if (this.redPawUPCTotal < 100) {
                return true;
            } else {
                false;
            }
        },
        setBluePawUPCTotal: function (newBP) {
            this.bluePawUPCTotal = newBP;
        },
        getBluePawUPCTotal: function () {
            return this.bluePawUPCTotal;
        },
        bluePawUPCLow: function () {
            if (this.bluePawUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setBlackPawUPCTotal: function (newBlP) {
            this.blackPawUPCTotal = newBlP;
        },
        getBlackPawUPCTotal: function () {
            return this.blackPawUPCTotal;
        },
        blackPawUPCLow: function () {
            if (this.blackPawUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setRedNoteboardUPCTotal: function (newRN) {
            this.redNoteboardUPCTotal = newRN;
        },
        getRedNoteboardUPCTotal: function () {
            return this.redNoteboardUPCTotal;
        },
        redNoteboardUPCLow: function () {
            if (this.redNoteboardUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setBlueNoteboardUPCTotal: function (newBN) {
            this.blueNoteboardUPCTotal = newBN;
        },
        getBlueNoteboardUPCTotal: function () {
            return this.blueNoteboardUPCTotal;
        },
        blueNoteboardUPCLow: function () {
            if (this.blueNoteboardUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setBlackNoteboardUPCTotal: function (newBlN) {
            this.blackNoteboardUPCTotal = newBlN;
        },
        getBlackNoteboardUPCTotal: function () {
            return this.blackNoteboardUPCTotal;
        },
        blackNoteboardUPCTotal: function () {
            if (this.blackNoteboardUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setWonderfallSkin2wUPCTotal: function (newW) {
            this.wonderfallSkin2wUPCTotal = newW;
        },
        getWonderfallSkin2wUPCTotal: function () {
            return this.wonderfallSkin2wUPCTotal;
        },
        wonderfallSkin2wUPCLow: function () {
            if (this.wonderfallSkin2wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setWonderfallSkin4wUPCTotal: function (newWW) {
            this.wonderfallSkin4wUPCTotal = newWW;
        },
        getWonderfallSkin4wUPCTotal: function () {
            return this.wonderfallSkin4wUPCTotal;
        },
        wonderfallSkin4wUPCLow: function () {
            if (this.wonderfallSkin4wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setFlowerificSkin2wUPCTotal: function (newF) {
            this.flowerificSkin2wUPCTotal = newF;
        },
        getFlowerificSkin2wUPCTotal: function () {
            return this.flowerificSkin2wUPCTotal;
        },
        flowerificSkin2wUPCLow: function () {
            if (this.flowerificSkin2wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setFlowerificSkin4wUPCTotal: function (newFF) {
            this.flowerificSkin4wUPCTotal = newFF;
        },
        getFlowerificSkin4wUPCTotal: function () {
            return this.flowerificSkin4wUPCTotal;
        },
        flowerificSkin4wUPCLow: function () {
            if (this.flowerificSkin4wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setPatrioticSkin2wUPCTotal: function (newP) {
            this.patrioticSkin2wUPCTotal = newP;
        },
        getPatrioticSkin2wUPCTotal: function () {
            return this.patrioticSkin2wUPCTotal;
        },
        patrioticSkin2wUPCLow: function () {
            if (this.patrioticSkin2wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setPatrioticSkin4wUPCTotal: function (newPP) {
            this.patrioticSkin4wUPCTotal = newPP;
        },
        getPatrioticSkin4wUPCTotal: function () {
            return this.patrioticSkin4wUPCTotal;
        },
        patrioticSkin4wUPCLow: function () {
            if (this.patrioticSkin4wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setBarktasticSkin2wUPCTotal: function (newB) {
            this.barktasticSkin2wUPCTotal = newB;
        },
        getBarktasticSkin2wUPCTotal: function () {
            return this.barktasticSkin2wUPCTotal;
        },
        barktasticSkin2wUPCLow: function () {
            if (this.barktasticSkin2wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setBarktasticSkin4wUPCTotal: function (newBB) {
            this.barktasticSkin4wUPCTotal = newBB;
        },
        getBarktasticSkin4wUPCTotal: function () {
            return this.barktasticSkin4wUPCTotal;
        },
        barktasticSkin4wUPCLow: function () {
            if (this.barktasticSkin4wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setMilitarySkin2wUPCTotal: function (newM) {
            this.militarySkin2wUPCTotal = newM;
        },
        getMilitarySkin2wUPCTotal: function () {
            return this.militarySkin2wUPCTotal;
        },
        militarySkin2wUPCLow: function () {
            if (this.militarySkin2wUPCTotal < 100) {
                return true;
            } else {
                return false;
            }
        },
        setMilitarySkin4wUPCTotal: function (newMM) {
            this.militarySkin4wUPCTotal = newMM;
        },
        getMilitarySkin4wUPCTotal: function () {
            return this.militarySkin4wUPCTotal;
        },
        militarySkin4wUPCLow: function () {
            if (this.militarySkin4wUPCTotal < 100) {
                return true;
            } else {
                false;
            }
        }
    },

    GrillBoxes: {
        totalGrillBoxes,
        setTotalGrillBoxes: function (newG) {
            this.totalGrillBoxes = newG;
        },
        getTotalGrillBoxes: function () {
            return this.totalGrillBoxes;
        },
        grillBoxesLow: function () {
            if (this.totalGrillBoxes < 50) {
                return true;
            } else {
                return false;
            }
        }
    },

    Cores: {
        totalCores,
        setTotalCores: function (newC) {
            this.totalCores = newC;
        },
        getTotalCores: function () {
            return this.totalCores;
        },
        totalCoresLow: function () {
            if (this.totalCores < 200) {
                return true;
            } else {
                return false;
            }
        }
    },

    Blisters: {
        totalPawBlisters,
        setTotalPawBlisters: function (newB) {
            this.totalPawBlisters = newB;
        },
        getTotalPawBlisters: function () {
            return this.totalPawBlisters;
        },
        pawBlistersLow: function () {
            if (this.totalPawBlisters < 200) {
                return true;
            } else {
                return false;
            }
        }
    },

    BlisterCards: {
        totalCards,
        setTotalCards: function (newC) {
            this.totalCards = newC;
        },
        getTotalCards: function () {
            return this.totalCards;
        },
        blisterCardsLow: function () {
            if (this.totalCards < 200) {
                return true;
            } else {
                return false;
            }
        }
    },

    WalkerBoxes: {
        totalWalkerBoxes,
        setTotalWalkerBoxes: function (newB) {
            this.totalWalkerBoxes = newB;
        },
        getTotalWalkerBoxes: function () {
            return this.totalWalkerBoxes;
        },
        walkerBoxesLow: function () {
            if (this.totalWalkerBoxes < 100) {
                return true;
            } else {
                return false;
            }
        }
    },
    walkerBoxesLow: walkerBoxesLow(),
    blisterCardsLow: blisterCardsLow(),
    puppyPawBlistersLow: pawBlistersLow(),
    ABSLow: ABSLow(),
    puppyfeetLow: puppyFeetLow(),
    walkers4wLow: walker4WLow(),
    walkers2wLow: walker2WLow(),
    grommetsLow: grommetsLow(),
    velcroLow: velcroLow(),
    genFormLow: genFormLow(),
    averyDen1105Low: averyDen1105Low(),
    averyDen1106Low: averyDen1106Low(),
    laminateLow: laminateLow(),
    truckStickerLow: truckStickerLow(),
    noteboardStickerLow: noteboardStickerLow(),
    redTruckUPCLow: redTruckUPCLow(),
    blueTruckUPCLow: blueTruckUPCLow(),
    blackTruckUPCLow: blackTruckUPCLow(),
    redPawUPCLow: redPawUPCLow(),
    bluePawUPCLow: bluePawUPCLow(),
    blackPawUPCLow: blackTruckUPCLow(),
    redNoteboardUPCLow: redNoteboardUPCLow(),
    blueNoteboardUPCLow: blueNoteboardUPCLow(),
    blackNoteboardUPCLow: blackNoteboardUPCLow(),
    wonderfallSkin2wUPCLow: wonderfallSkin2wUPCLow(),
    wonderfallSkin4wUPCLow: wonderfallSkin4wUPCLow(),
    flowerificSkin2wUPCLow: flowerificSkin2wUPCLow(),
    flowerificSkin4wUPCLow: flowerificSkin4wUPCLow(),
    patrioticSkin2wUPCLow: patrioticSkin2wUPCLow(),
    patrioticSkin4wUPCLow: patrioticSkin4wUPCLow(),
    barktasticSkin2wUPCLow: barktasticSkin2wUPCLow(),
    barktasticSkin4wUPCLow: barktasticSkin4wUPCLow(),
    militarySkin2wUPCLow: militarySkin2wUPCLow(),
    militarySkin4wUPCLow: militarySkin4wUPCLow(),
    grillBoxesLow: grillBoxesLow(),
    coresLow: totalCoresLow(),
    screwsLow: screwsLow(),
    shippingEnvelopesLow: shippingEnvelopesLow(),
    polybagsLow: polybagsLow(),
    getABSLow: function () {
        return this.ABSLow;
    },
    getPuppyfeetLow: function () {
        return this.puppyfeetLow;
    },
    getWalkers4wLow: function () {
        return this.walkers4wLow;
    },
    getWalkers2wLow: function () {
        return this.walkers2wLow;
    },
    getGrommetsLow: function () {
        return grommetsLow;
    },
    getVelcroLow: function () {
        return this.velcroLow;
    },
    getGenFromLow: function () {
        return this.genFormLow;
    },
    getAveryDen1105Low: function () {
        return this.averyDen1105Low;
    },
    getAveryDen1106Low: function () {
        return this.averyDen1106Low;
    },
    getLaminateLow: function () {
        return this.laminateLow;
    },
    getTruckStickerLow: function () {
        return this.truckStickerLow;
    },
    getNoteboardStickerLow: function () {
        return this.noteboardStickerLow;
    },
    getRedTruckUPCLow: function () {
        return this.redTruckUPCLow;
    },
    getBlueTruckUPCLow: function () {
        return this.blueTruckUPCLow;
    },
    getBlackTruckUPCLow: function () {
        return this.blackTruckUPCLow;
    },
    getRedPawUPCLow: function () {
        return this.redPawUPCLow;
    },
    getBluePawUPCLow: function () {
        return this.bluePawUPCLow;
    },
    getBlackPawUPCLow: function () {
        return this.blackPawUPCLow;
    },
    getRedNoteboardUPCLow: function () {
        return this.redNoteboardUPCLow;
    },
    getBlueNoteboardUPCLow: function () {
        return this.blueNoteboardUPCLow;
    },
    getBlackNoteboardUPCLow: function () {
        return this.blackNoteboardUPCLow;
    },
    getWonderfallSkin2wUPCLow: function () {
        return this.wonderfallSkin2wUPCLow;
    },
    getWonderfallSkin4wUPCLow: function () {
        return this.wonderfallSkin4wUPCLow;
    },
    getFlowerificSkin2wUPCLow: function () {
        return this.flowerificSkin2wUPCLow;
    },
    getFlowerificSkin4wUPCLow: function () {
        return this.flowerificSkin4wUPCLow;
    },
    getPatrioticSkin2wUPCLow: function () {
        return this.patrioticSkin2wUPCLow;
    },
    getPatrioticSkin4wUPCLow: function () {
        return this.patrioticSkin4wUPCLow;
    },
    getBarktasticSkin2wUPCLow: function () {
        return this.barktasticSkin2wUPCLow;
    },
    getBarktasticSkin4wUPCLow: function () {
        return this.barktasticSkin4wUPCLow;
    },
    getMilitarySkin2wUPCLow: function () {
        return this.militarySkin2wUPCLow;
    },
    getMilitarySkin4wUPCLow: function () {
        return this.militarySkin4wUPCLow;
    },
    getGrillBoxesLow: function () {
        return this.grillBoxesLow;
    },
    getCoresLow: function () {
        return this.coresLow;
    },
    getScrewsLow: function () {
        return this.screwsLow;
    },
    getShippingEnvelopesLow: function () {
        return this.shippingEnvelopesLow;
    },
    getPolybagsLow: function () {
        return this.polybagsLow;
    }
};
