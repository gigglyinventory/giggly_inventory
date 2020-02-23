'use strict'
var Production = {
    Belovac: {
        redABSWaiting,
        blueABSWaiting,
        blackABSWaiting,
        redABSLoss,
        blueABSLoss,
        blackABSLoss,
        setRedWaiting: function (red) {
            this.redABSWaiting = red;
        },
        getRedWaiting: function () {
            return this.redABSWaiting;
        },
        setBlueWaiting: function (blue) {
            this.blueABSWaiting = blue;
        },
        getBlueWaiting: function () {
            return this.blueABSWaiting;
        },
        setBlackWaiting: function (black) {
            this.blackABSWaiting = black;
        },
        getBlackWaiting: function () {
            return this.blackABSWaiting;
        },
        setRedLoss: function (rLoss) {
            this.redABSLoss = rLoss;
        },
        getRedLoss: function () {
            return this.redABSLoss;
        },
        setBlueLoss: function (bLoss) {
            this.blueABSLoss = bLoss;
        },
        getBlueLoss: function () {
            return this.blueABSLoss;
        },
        setBlackLoss: function (blLoss) {
            this.blackABSLoss = blLoss;
        },
        getBlackLoss: function () {
            return this.blackABSLoss;
        },
        process: function (color, designName, completed, loss) {
            switch (color) {
                case "red":
                    setRedLoss(getRedLoss() + loss);
                    switch (designName) {
                        case "truckFront":
                            setRedTruck(getRedTruck() + completed);
                            setRedTruckGWaiting(getRedTruckGWaiting() + completed);
                            setRedWaiting(getRedWaiting() - completed - loss);
                            break;
                        case "noteboard":
                            setRedNote(getRedNote() + completed);
                            setRedNoteboardGWaiting(getRedNoteboardGWaiting() + completed);
                            setRedWaiting(getRedWaiting() - completed - loss);
                            break;
                    }
                case "blue":
                    setBlueLoss(getBlueLoss() + loss);
                    switch (designName) {
                        case "truckFront":
                            setBlueTruck(getBlueTruck() + completed);
                            setBlueTruckGWaiting(getBlueTruckGWaiting() + completed);
                            setBlueWaiting(getBlueWaiting() - comleted - loss);
                            break;
                        case "noteboard":
                            setBlueNote(getBlueNote() + completed);
                            setBlueNoteboardGWaiting(getBlueNoteboardGWaiting() + completed);
                            setBlueWaiting(getBlueWaiting() - completed - loss);
                            break;
                    }
                case "black":
                    setBlackLoss(getBlackLoss() + loss);
                    switch (designName) {
                        case "truckFront":
                            setBlackTruck(getBlackTruck() + completed);
                            setBlackTruckGWaiting(getBlackTruckGWaiting() + completed);
                            setBlackWaiting(getBlackWaiting() - completed - loss);
                            break;
                        case "noteboard":
                            setBlackNote(getBlackNote() + completed);
                            setBlackNoteboardGWaiting(getBlackNoteboardGWaiting() + completed);
                            setBlackWaiting(getBlackWaiting() - completed - loss);
                            break;
                    }
            }
        },
    },
    Cutting: {
        redTruckGuillWaiting,
        blueTruckGuillWaiting,
        blackTruckGuillWaiting,
        redNoteboardGuillWaiting,
        blueNoteboardGuillWaiting,
        blackNoteboardGuillWaiting,
        redTruckGuillLoss,
        blueTruckGuillLoss,
        blackTruckGuillLoss,
        redNoteboardGuillLoss,
        blueNoteboardGuillLoss,
        blackNoteboardGuillLoss,
        redTruckRotoWaiting,
        blueTruckRotoWaiting,
        blackTruckRotoWaiting,
        redNoteboardRotoWaiting,
        blueNoteboardRotoWaiting,
        blackNoteboardRotoWaiting,
        redTruckRotoLoss,
        blueTruckRotoLoss,
        blackTruckRotoLoss,
        redNoteboardRotoLoss,
        blueNoteboardRotoLoss,
        blackNoteboardRotoLoss,
        redTruckSandWaiting,
        blueTruckSandWaiting,
        blackTruckSandWaiting,
        redNoteboardSandWaiting,
        blueNoteboardSandWaiting,
        blackNoteboardSandWaiting,
        redTruckSandLoss,
        blueTruckSandLoss,
        blackTruckSandLoss,
        redNoteboardSandLoss,
        blueNoteboardSandLoss,
        blackNoteboardSandLoss,
        setRedTruckGWaiting: function (rWait) {
            this.redTruckGuillWaiting = rWait;
        },
        getRedTruckGWaiting: function () {
            return this.redTruckGuillWaiting;
        },
        setBlueTruckGWaiting: function (bWait) {
            this.blueTruckGuillWaiting = bWait;
        },
        getBlueTruckGWaiting: function () {
            return this.blueTruckGuillWaiting;
        },
        setBlackTruckGWaiting: function (blWait) {
            this.blackTruckGuillWaiting = blWait;
        },
        getBlackTruckGWaiting: function () {
            return this.blackTruckGuillWaiting;
        },
        setRedNoteboardGWaiting: function (rWait) {
            this.redNoteboardGuillWaiting = rWait;
        },
        getRedNoteboardGWaiting: function () {
            return this.redNoteboardGuillWaiting;
        },
        setBlueNoteboardGWaiting: function (bWait) {
            this.blueNoteboardGuillWaiting = bWait;
        },
        getBlueNoteboardGWaiting: function () {
            return this.blueNoteboardGuillWaiting;
        },
        setBlackNoteboardGWaiting: function (blWait) {
            this.blackNoteboardGuillWaiting = blWait;
        },
        getBlackNoteboardGWaiting: function () {
            return this.blackNoteboardGuillWaiting;
        },
        guillotine: function (color, designName, completed, loss) {
            switch (color) {
                case "red":
                    switch (designName) {
                        case "Truck":
                            this.redTruckRotoWaiting += completed;
                            this.redTruckGuillLoss += loss;
                            this.redTruckGuillWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.redNoteboardRotoWaiting += completed;
                            this.redNoteboardGuillLoss += loss;
                            this.redNoteboardGuillWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    switch (designName) {
                        case "Truck":
                            this.blueTruckRotoWaiting += completed;
                            this.blueTruckGuillLoss += loss;
                            this.blueTruckGuillWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.blueNoteboardRotoWaiting += completed;
                            this.blueNoteboardGuillLoss += loss;
                            this.blueNoteboardGuillWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    switch (designName) {
                        case "Truck":
                            this.blackTruckRotoWaiting += completed;
                            this.blackTruckGuillLoss += loss;
                            this.blackTruckGuillWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.blackNoteboardRotoWaiting += completed;
                            this.blackNoteboardGuillLoss += loss;
                            this.blackNoteboardGuillWaiting -= (completed + loss);
                            break;
                    }
                    break;
            }
        },
        rotozip: function (color, designName, completed, loss) {
            switch (color) {
                case "red":
                    switch (designName) {
                        case "Truck":
                            this.redTruckSandWaiting += completed;
                            this.redTruckRotoLoss += loss;
                            this.redTruckRotoWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.redNoteboardSandWaiting += completed;
                            this.redNoteboardRotoLoss += loss;
                            this.redTruckRotoWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    switch (designName) {
                        case "Truck":
                            this.blueTruckSandWaiting += completed;
                            this.blueTruckRotoLoss += loss;
                            this.blueTruckRotoWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.blueNoteboardSandWaiting += completed;
                            this.blueNoteboardRotoLoss += loss;
                            this.blueNoteboardRotoWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    switch (designName) {
                        case "Truck":
                            this.blackTruckSandWaiting += completed;
                            this.blackTruckRotoLoss += loss;
                            this.blackTruckRotoWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.blackNoteboardSandWaiitng += completed;
                            this.blackNoteboardRotoLoss += loss;
                            this.blackNoteboardRotoWaiting -= (completed + loss);
                            break;
                    }
                    break;
            }
        },
        sanding: function (color, designName, completed, loss) {
            switch (color) {
                case "red":
                    switch (designName) {
                        case "Truck":
                            setRedTruckVWaiting(getRedTruckVWaiting() + completed);
                            this.redTruckRotoLoss += loss;
                            this.redTruckRotoWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            setRedNoteboardVWaiting(getRedNoteboardVWaiting() + completed);
                            this.redNoteboardRotoLoss += loss;
                            this.redNoteboardRotoWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    switch (designName) {
                        case "Truck":
                            setBlueTruckVWaiting(getBlueTruckVWaiting() + completed);
                            this.blueTruckRotoLoss += loss;
                            this.blueTruckRotoWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            setBlueNoteboardVWaiting(getBlueNoteboardVWaiting() + completed);
                            this.blueNoteboardRotoLoss += loss;
                            this.blueNoteboardRotoWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    switch (designName) {
                        case "Truck":
                            setBlackTruckVWaiting(getBlackTruckVWaiting() + completed);
                            this.blackTruckRotoLoss += loss;
                            this.blackTruckRotoWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            setBlackNoteboardVWaiting(getBlackNoteboardVWaiting() + completed);
                            this.blackNoteboardRotoLoss += loss;
                            this.blackNoteboardRotoWaiting -= (completed + loss);
                            break;
                    }
                    break;
            }
        }
    },
    assembly: {
        redTruckVelcroWaiting,
        blueTruckVelcroWaiting,
        blackTruckVelcroWaiting,
        redNoteboardVelcroWaiting,
        blueNoteboardVelcroWaiting,
        blackNoteboardVelcroWaiting,
        redTruckVelcroLoss,
        blueTruckVelcroLoss,
        blackTruckVelcroLoss,
        redNoteboardVelcroLoss,
        blueNoteboardVelcroLoss,
        blackNoteboardVelcroLoss,
        redTruckStickerWaiting,
        blueTruckStickerWaiting,
        blackTruckStickerWaiting,
        redNoteboardStickerWaiting,
        blueNoteboardStickerWaiting,
        blackNoteboardStickerWaiting,
        redPawTrimWaiting,
        bluePawTrimWaiting,
        blackPawTrimWaiting,
        redPawTrimLoss,
        bluePawTrimLoss,
        blackPawTrimLoss,
        redPawScrewWaiting,
        bluePawScrewWaiting,
        blackPawScrewWaiting,
        redPawScrewLoss,
        bluePawScrewLoss,
        blackPawScrewLoss,
        setRedTruckVWaiting: function (newW) {
            this.redTruckVelcroWaiting = newW;
        },
        getRedTruckVWaiting: function () {
            return this.redTruckVelcroWaiting;
        },
        setBlueTruckVWaiting: function (newW) {
            this.blueTruckVelcroWaiting = newW;
        },
        getBlueTruckVWaiting: function () {
            return this.blueTruckVelcroWaiting;
        },
        setBlackTruckVWaiting: function (newW) {
            this.blackTruckVelcroWaiting = newW;
        },
        getBlackTruckVWaiting: function () {
            return blackTruckVelcroWaiting;
        },
        setRedNoteboardVWaiting: function (newW) {
            this.redNoteboardVelcroWaiting = newW;
        },
        getRedNoteboardVWaiting: function () {
            return this.redNoteboardVelcroWaiting;
        },
        setBlueNoteboardVWaiting: function (newW) {
            this.blueNoteboardVelcroWaiting = newW;
        },
        getBlueNoteboardVWaiting: function () {
            return this.blueNoteboardVelcroWaiting;
        },
        setBlackNoteboardVWaiting: function (newW) {
            this.blackNoteboardVelcroWaiting = newW;
        },
        getBlackNoteboardVWaiting: function () {
            return this.blackNoteboardVelcroWaiting;
        },
        velcro: function (color, designName, completed, loss) {
            switch (color) {
                case "red":
                    switch (designName) {
                        case "Truck":
                            this.redTruckStickerWaiting += completed;
                            this.redTruckVelcroLoss += loss;
                            this.redTruckVelcroWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.redNoteboardStickerWaiting += completed;
                            this.redNoteboardVelcroLoss += loss;
                            this.redNoteboardVelcroWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    switch (designName) {
                        case "Truck":
                            this.blueTruckStickerWaiting += completed;
                            this.blueTruckVelcroLoss += loss;
                            this.blueTruckVelcroWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.blueNoteboardStickerWaiting += completed;
                            this.blueNoteboardVelcroLoss += loss;
                            this.blueNoteboardVelcroWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    switch (designName) {
                        case "Truck":
                            this.blackTruckStickerWaiting += completed;
                            this.blackTruckVelcroLoss += loss;
                            this.blackTruckVelcroWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            this.blackNoteboardStickerWaiting += completed;
                            this.blackNoteboardVelcroLoss += loss;
                            this.blackNoteboardVelcroWaiting -= (completed + loss);
                            break;
                    }
                    break;
            }
        },
        stickers: function (color, designName, completed) {
            switch (color) {
                case "red":
                    switch (designName) {
                        case "Truck":
                            setRedTruckPackWaiting(getRedTruckPackWaiting() + completed);
                            this.redTruckStickerWaiting -= completed;
                            break;
                        case "Noteboard":
                            setRedNoteboardPackWaiting(getRedNoteboardPackWaiting() + completed);
                            this.redNoteboardStickerWaiting -= completed;
                            break;
                    }
                    break;
                case "blue":
                    switch (designName) {
                        case "Truck":
                            setBlueTruckPackWaiting(getBlueTruckPackWaiting() + completed);
                            this.blueTruckStickerWaiting -= completed;
                            break;
                        case "Noteboard":
                            setBlueNoteboardPackWaiting(getBlueNoteboardPackWaiting() + completed);
                            this.blueNoteboardStickerWaiting -= completed;
                            break;
                    }
                    break;
                case "black":
                    switch (designName) {
                        case "Truck":
                            setBlackTruckPackWaiting(getBlackTruckPackWaiting() + completed);
                            this.blackTruckStickerWaiting -= completed;
                            break;
                        case "Noteboard":
                            setBlackNoteboardPackWaiting(getBlackNoteboardPackWaiting() + completed);
                            this.blackNoteboardStickerWaiting -= completed;
                            break;
                    }
                    break;
            }
        },
        trim: function (color, design, completed, loss) {
            switch (color) {
                case "red":
                    switch (design) {
                        case "Paw":
                            this.redPawScrewWaiting += completed;
                            this.redPawTrimLoss += loss;
                            this.redPawTrimWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Paw":
                            this.bluePawScrewWaiting += completed;
                            this.bluePawTrimLoss += loss;
                            this.bluePawTrimWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Paw":
                            this.blackPawScrewWaiting += completed;
                            this.blackPawTrimLoss += loss;
                            this.blackPawTrimWaiting -= (completed + loss);
                            break;
                    }
                    break;
            }
        },
        screw: function (color, design, completed, loss) {
            switch (color) {
                case "red":
                    switch (design) {
                        case "Paw":
                            setRedPawBlisterWaiting(getRedPawBlisterWaiting() + completed);
                            this.redPawScrewLoss += loss;
                            this.redPawScrewWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Paw":
                            setBluePawBlisterWaiting(getBluePawBlisterWaiting() + completed);
                            this.bluePawScrewLoss += loss;
                            this.bluePawScrewWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Paw":
                            setBlackPawBlisterWaiting(getBlackPawBlisterWaiting() + completed);
                            this.blackPawScrewLoss += loss;
                            this.blackPawScrewWaiting -= (completed + loss);
                            break;
                    }
                    break;
            }
        },
    },
    shipping: {
        redPawBlisterWaiting,
        bluePawBlisterWaiting,
        blackPawBlisterWaiting,
        redTruckPackWaiting,
        blueTruckPackWaiting,
        blackTruckPackWaiting,
        redNoteboardPackWaiting,
        blueNoteboardPackWaiting,
        blackNoteboardPackWaiting,
        wonderfallSkin4WPackWaiting,
        wonderfallSkin2WPackWaiting,
        barktasticSkin4WPackWaiting,
        barktasticSkin2WPackWaiting,
        patrioticSkin4WPackWaiting,
        patrioticSkin2WPackWaiting,
        flowerificSkin4WPackWaiting,
        flowerificSkin2WPackWaiting,
        militarySkin4WPackWaiting,
        militarySkin2WPackWaiting,
        setRedPawBlisterWaiting: function (newWaiting) {
            this.redPawBlisterWaiting = newWaiting;
        },
        getRedPawBlisterWaiting: function () {
            return this.redPawBlisterWaiting;
        },
        setBluePawBlisterWaiting: function (newWaiting) {
            this.bluePawBlisterWaiting = newWaiting;
        },
        getBluePawBlisterWaiting: function () {
            return this.bluePawBlisterWaiting;
        },
        setBlackPawBlisterWaiting: function (newWaiting) {
            this.blackPawBlisterWaiting = newWaiting;
        },
        getBlackPawBlisterWaiting: function () {
            return this.blackPawBlisterWaiting;
        },
        setRedTruckPackWaiting: function (newWaiting) {
            this.redTruckPackWaiting = newWaiting;
        },
        getRedTruckPackWaiting: function () {
            return this.redTruckPackWaiting;
        },
        setBlueTruckPackWaiting: function (newWaiting) {
            this.blueTruckPackWaiting = newWaiting;
        },
        getBlueTruckPackWaiting: function () {
            return this.blueTruckPackWaiting;
        },
        setBlackTruckPackWaiting: function (newWaiting) {
            this.blackTruckPackWaiting = newWaiting;
        },
        getBlackTruckPackWaiting: function () {
            return this.blackTruckPackWaiting;
        },
        setRedNoteboardPackWaiting: function (newWaiting) {
            this.redNoteboardPackWaiting = newWaiting;
        },
        getRedNoteboardPackWaiting: function () {
            return this.redNoteboardPackWaiting;
        },
        setBlueNoteboardPackWaiting: function (newWaiting) {
            this.blueNoteboardPackWaiting = newWaiting;
        },
        getBlueNoteboardPackWaiting: function () {
            return this.blueNoteboardPackWaiting;
        },
        setBlackNoteboardPackWaiting: function (newWaiting) {
            this.blackNoteboardPackWaiting = newWaiting;
        },
        getBlackNoteboardPackWaiting: function () {
            return this.blackNoteboardPackWaiting;
        },
        setWonderfallSkin4WpackWaiting: function (newW){
            this.wonderfallSkin4WPackWaiting = newW;
        },
        getWonderfallSkin4WPackWaiting: function (){
            return this.wonderfallSkin4WPackWaiting;
        },
        setWonderfallSkin2WPackWaiting: function (newWW){
            this.wonderfallSkin2WPackWaiting = newWW;
        },
        getWonderfallSkin2WPackWaiting: function (){
            return this.wonderfallSkin2WPackWaiting;
        },
        setBarktasticSkin4WPackWaiting: function (newB){
            this.barktasticSkin4WPackWaiting = newB;
        },
        getBarktasticSkin4WPackWaiting: function (){
            return this.barktasticSkin4WPackWaiting;
        },
        setBarktasticSkin2WPackWaiting: function (newBB){
            this.barktasticSkin2WPackWaiting = newBB;
        },
        getBarktasticSkin2WPackWaiting: function (){
            return this.barktasticSkin2WPackWaiting;
        },
        setPatrioticSkin4WPackWaiting: function (newP){
            this.patrioticSkin4WPackWaiting = newP;
        },
        getPatrioticSkin4WPackWaiting: function () {
            return this.patrioticSkin4WPackWaiting;
        },
        setPatrioticSkin2WPackWaiting: function (newPP){
            this.PatrioticSkin2WPackWaiting = newPP;
        },
        getPatrioticSkin2WPackWaiting: function (){
            return this.patrioticSkin2WPackWaiting;
        },
        setFlowerificSkin4WPackWaiting: function (newF) {
            this.flowerificSkin4WPackWaiting = newF;
        },
        getFlowerificSkin4WPackWaiting: function (){
            return this.flowerificSkin4WPackWaiting;
        },
        setFlowerificSkin2WPackWaiting: function (newFF){
            this.flowerificSkin2WPackWaiting = newFF;
        },
        getFlowerificSkin2WPackWaiting: function (){
            return this.flowerificSkin2WPackWaiting;
        },
        setMilitarySkin4WPackWaiting: function (newM){
            this.militarySkin4WPackWaiting = newM;
        },
        getMilitarySkin4WPackWaiting: function (){
            return this.militarySkin4WPackWaiting;
        },
        setMilitarySkin2WPackWaiting: function (newMM){
            this.militarySkin2WPackWaiting = newMM;
        },
        getMilitarySkin2WPackWaiting: function (){
            return this.militarySkin2WPackWaiting;
        },
        blisterPack: function (color, design, completed) {
            switch (color) {
                case "red":
                    switch (design) {
                        case "Paw":
                            setRdyShipRedPaws(getRdyshipRedPaws() + completed);
                            this.redPawBlisterWaiting -= completed;
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Paw":
                            setRdyShipBluePaws(getRdyShipBluePaws() + completed);
                            this.bluePawBlisterWaiting -= completed;
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Paw":
                            setRdyShipBlackPaws(getRdyShipBlackPaws() + completed);
                            this.blackPawBlisterWaiting -= completed;
                            break;
                    }
                    break;
            }
        },
        grillPackage: function (color, design, completed) {
            switch (color) {
                case "red":
                    switch (design) {
                        case "Truck":
                            setRdyShipRedTruck(getRdyShipRedTruck() + completed);
                            this.redTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            setRdyShipRedNoteboard(getRdyShipRedNoteboard() + completed);
                            this.redNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Truck":
                            setRdyShipBlueTruck(getRdyShipBlueTruck() + completed);
                            this.blueTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            setRdyShipBlueNoteboard(getRdyShipBlueNoteboard() + completed);
                            this.blueNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Truck":
                            setRdyShipBlackTruck(getRdyShipBlackTruck() + completed);
                            this.blackTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            setRdyShipBlackNoteboard(getRdyShipBlackNoteboard() + completed);
                            this.blackNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
            }
        },
        walkerPackage: function (walkerType, design, completed) {
            switch (walkerType) {
                case "four-wheel":
                    switch (design) {
                        case "Wonderfall":
                            Product.gigglyskins.setRdyShipWonderfallSkins4W(Product.gigglyskins.getRdyShipWonderfallSkins4W() + completed);
                            this.wonderfallSkin4WPackWaiting -= completed;
                            break;
                        case "Barktastic":
                            Product.gigglyskins.setRdyShipBarktasticSkins4W(Product.gigglyskins.getRdyShipBarktasticSkins4W() + completed);
                            this.barktasticSkin4WPackWaiting -= completed;
                            break;
                        case "Flowerific":
                            Product.gigglyskins.setRdyShipFlowerificSkins4W(Product.gigglyskins.getRdyShipFlowerificSkins4W() + completed);
                            this.flowerificSkin4WPackWaiting -= completed;
                            break;
                        case "Patriotic":
                            Product.gigglyskins.setRdyShipPatrioticSkins4W(Product.gigglyskins.getRdyShipPatrioticSkins4W() + completed);
                            this.patrioticSkin4WPackWaiting -= completed;
                            break;
                        case "Military":
                            Product.gigglyskins.setRdyShipMilitarySkins4W(Product.gigglyskins.getRdyShipMilitarySkins4W() + completed);
                            this.militarySkin4WPackWaiting -= completed;
                            break;
                    }
                    break;
                case "two-wheel":
                    switch (design) {
                        case "Wonderfall":
                            Product.gigglyskins.setRdyShipWonderfallSkins2W(Product.gigglyskins.getRdyShipWonderfallSkins2W() + completed);
                            this.wonderfallSkin2WPackWaiting -= completed;
                            break;
                        case "Barktastic":
                            Product.gigglyskins.setRdyShipBarktasticSkins2W(Product.gigglyskins.getRdyShipBarktasticSkins2W() + completed);
                            this.barktasticSkin2WPackWaiting -= completed;
                            break;
                        case "Flowerific":
                            Product.gigglyskins.setRdyShipFlowerificSkins2W(Product.gigglyskins.getRdyShipFlowerificSkins2W() + completed);
                            this.flowerificSkin2WPackWaiting -= completed;
                            break;
                        case "Patriotic":
                            Product.gigglyskins.setRdyShipPatrioticSkins2W(Product.gigglyskins.getRdyShipPatrioticSkins2W() + completed);
                            this.patrioticSkin2WPackWaiting -= completed;
                            break;
                        case "Military":
                            Product.gigglyskins.setRdyShipMilitarySkins2W(Product.gigglyskins.getRdyShipMilitarySkins2W() + completed);
                            this.militarySkin2WPackWaiting -= completed;
                            break;
                    }
            }                   
        }
    }

};
