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
                    this.setRedLoss(this.getRedLoss() + loss);
                    RawMaterials.ABSPlastic.setABSRed(RawMaterials.ABSPlastic.getABSRed() - completed - loss);
                    switch (designName) {
                        case "Truck":
                            Product.gigglygrills.truckFront.setRedTruck(Product.gigglygrills.truckFront.getRedTruck() + completed);
                            setRedTruckGWaiting(getRedTruckGWaiting() + completed);
                            this.setRedWaiting(this.getRedWaiting() - completed - loss);
                            break;
                        case "Noteboard":
                            Product.gigglygrills.Noteboard.setRedNoteboard(Product.gigglygrills.Noteboard.getRedNoteboard() + completed);
                            setRedNoteboardGWaiting(getRedNoteboardGWaiting() + completed);
                            this.setRedWaiting(this.getRedWaiting() - completed - loss);
                            break;
                    }
                    break;
                case "blue":
                    this.setBlueLoss(this.getBlueLoss() + loss);
                    RawMaterials.ABSPlastic.setABSBlue(RawMaterials.ABSPlastic.getABSBlue() - completed - loss);
                    switch (designName) {
                        case "Truck":
                            Product.gigglygrills.truckFront.setBlueTruck(Product.gigglygrills.truckFront.getBlueTruck() + completed);
                            setBlueTruckGWaiting(getBlueTruckGWaiting() + completed);
                            this.setBlueWaiting(this.getBlueWaiting() - comleted - loss);
                            break;
                        case "Noteboard":
                            Product.gigglygrills.Noteboard.setBlueNoteboard(Product.gigglygrills.Noteboard.getBlueNoteboard() + completed);
                            setBlueNoteboardGWaiting(getBlueNoteboardGWaiting() + completed);
                            this.setBlueWaiting(this.getBlueWaiting() - completed - loss);
                            break;
                    }
                    break;
                case "black":
                    this.setBlackLoss(getBlackLoss() + loss);
                    RawMaterials.ABSPlastic.setABSBlack(RawMaterials.ABSPlastic.getABSBlack() - completed - loss);
                    switch (designName) {
                        case "Truck":
                            Product.gigglygrills.truckFront.setBlackTruck(Product.gigglygrills.truckFront.getBlackTruck() + completed);
                            setBlackTruckGWaiting(getBlackTruckGWaiting() + completed);
                            this.setBlackWaiting(this.getBlackWaiting() - completed - loss);
                            break;
                        case "Noteboard":
                            Product.gigglygrills.Noteboard.setBlackNoteboard(Product.gigglygrills.Noteboard.getBlackNoteboard() + completed);
                            setBlackNoteboardGWaiting(getBlackNoteboardGWaiting() + completed);
                            this.setBlackWaiting(this.getBlackWaiting() - completed - loss);
                            break;
                    }
                    break;
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
                            this.redTruckSandLoss += loss;
                            this.redTruckSandWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            setRedNoteboardVWaiting(getRedNoteboardVWaiting() + completed);
                            this.redNoteboardSandLoss += loss;
                            this.redNoteboardSandWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    switch (designName) {
                        case "Truck":
                            setBlueTruckVWaiting(getBlueTruckVWaiting() + completed);
                            this.blueTruckSandLoss += loss;
                            this.blueTruckSandWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            setBlueNoteboardVWaiting(getBlueNoteboardVWaiting() + completed);
                            this.blueNoteboardSandLoss += loss;
                            this.blueNoteboardSandWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    switch (designName) {
                        case "Truck":
                            setBlackTruckVWaiting(getBlackTruckVWaiting() + completed);
                            this.blackTruckSandLoss += loss;
                            this.blackTruckSandWaiting -= (completed + loss);
                            break;
                        case "Noteboard":
                            setBlackNoteboardVWaiting(getBlackNoteboardVWaiting() + completed);
                            this.blackNoteboardSandLoss += loss;
                            this.blackNoteboardSandWaiting -= (completed + loss);
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
        walker4wWrapWaiting,
        walker2wWrapWaiting,
        setWalker2wWrapWaiting: function (newW) {
            this.walker2wWrapWaiting = newW;
        },
        getWalker2wWrapWaiting: function () {
            return this.walker2wWrapWaiting;
        },
        setWalker4wWrapWaiting: function (newW) {
            this.walker4wWrapWaiting = newW;
        },
        getWalker4wWrapWaiting: function () {
            return this.walker4wWrapWaiting;
        },
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
            RawMaterials.Grommets.setTotalGrommets(RawMaterials.Grommets.getTotalGrommets() - (completed * 4));
            RawMaterials.Velcro.setTotalVelcro(RawMaterials.Velcro.getTotalVelcro() - (completed * 4));
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
                            RawMaterials.Stickers.setTruckStickerTotal(RawMaterials.Stickers.getTruckStickerTotal() - completed);
                            setRedTruckPackWaiting(getRedTruckPackWaiting() + completed);
                            this.redTruckStickerWaiting -= completed;
                            break;
                        case "Noteboard":
                            RawMaterials.Stickers.setNoteboardStickerTotal(RawMaterials.Stickers.getNoteboardStickerTotal() - completed);
                            setRedNoteboardPackWaiting(getRedNoteboardPackWaiting() + completed);
                            this.redNoteboardStickerWaiting -= completed;
                            break;
                    }
                    break;
                case "blue":
                    switch (designName) {
                        case "Truck":
                            RawMaterials.Stickers.setTruckStickerTotal(RawMaterials.Stickers.getTruckStickerTotal() - completed);
                            setBlueTruckPackWaiting(getBlueTruckPackWaiting() + completed);
                            this.blueTruckStickerWaiting -= completed;
                            break;
                        case "Noteboard":
                            RawMaterials.Stickers.setNoteboardStickerTotal(RawMaterials.Stickers.getNoteboardStickerTotal() - completed);
                            setBlueNoteboardPackWaiting(getBlueNoteboardPackWaiting() + completed);
                            this.blueNoteboardStickerWaiting -= completed;
                            break;
                    }
                    break;
                case "black":
                    switch (designName) {
                        case "Truck":
                            RawMaterials.Stickers.setTruckStickerTotal(RawMaterials.Stickers.getTruckStickerTotal() - completed);
                            setBlackTruckPackWaiting(getBlackTruckPackWaiting() + completed);
                            this.blackTruckStickerWaiting -= completed;
                            break;
                        case "Noteboard":
                            RawMaterials.Stickers.setNoteboardStickerTotal(RawMaterials.Stickers.getNoteboardStickerTotal() - completed);
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
                    RawMaterials.PuppyFeet.setRedFeet(RawMaterials.PuppyFeet.getRedFeet() - loss);
                    switch (design) {
                        case "Paw":
                            this.redPawScrewWaiting += completed;
                            this.redPawTrimLoss += loss;
                            this.redPawTrimWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    RawMaterials.PuppyFeet.setBlueFeet(RawMaterials.PuppyFeet.getBlueFeet() - loss);
                    switch (design) {
                        case "Paw":
                            this.bluePawScrewWaiting += completed;
                            this.bluePawTrimLoss += loss;
                            this.bluePawTrimWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    RawMaterials.PuppyFeet.setBlackFeet(RawMaterials.PuppyFeet.getBlackFeet() - loss);
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
            RawMaterials.Screws.setTotalScrews(RawMaterials.Screws.getTotalScrews() - completed);
            RawMaterials.Cores.setTotalCores(RawMaterials.Cores.getTotalCores() - completed);
            switch (color) {
                case "red":
                    RawMaterials.PuppyFeet.setRedFeet(RawMaterials.PuppyFeet.getRedFeet() - loss);
                    switch (design) {
                        case "Paw":
                            setRedPawBlisterWaiting(getRedPawBlisterWaiting() + completed);
                            this.redPawScrewLoss += loss;
                            this.redPawScrewWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "blue":
                    RawMaterials.PuppyFeet.setBlueFeet(RawMaterials.PuppyFeet.getBlueFeet() - loss);
                    switch (design) {
                        case "Paw":
                            setBluePawBlisterWaiting(getBluePawBlisterWaiting() + completed);
                            this.bluePawScrewLoss += loss;
                            this.bluePawScrewWaiting -= (completed + loss);
                            break;
                    }
                    break;
                case "black":
                    RawMaterials.PuppyFeet.setBlackFeet(RawMaterials.PuppyFeet.getBlackFeet() - loss);
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

        wrap: function (walkerType, design, completed) {
            switch (walkerType) {
                case "four-wheel":
                    switch (design) {
                        case "Wonderfall":
                            setWonderfallSkin4WpackWaiting(getWonderfallSkin4WPackWaiting() + completed);
                            this.walker4wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker4WTotal(RawMaterials.Walkers.getWalker4WTotal() - completed);
                            Product.gigglyskins.setWonderfallSkins4W(Product.gigglyskins.getWonderfallSkins4W() + completed);
                            break;
                        case "Barktastic":
                            setBarktasticSkin4WPackWaiting(getBarktasticSkin4WPackWaiting() + completed);
                            this.walker4wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker4WTotal(RawMaterials.Walkers.getWalker4WTotal() - completed);
                            Product.gigglyskins.setBarktasticSkins4W(Product.gigglyskins.getBarktasticSkins4W() + completed);
                            break;
                        case "Patriotic":
                            setPatrioticSkin4WPackWaiting(getPatrioticSkin4WPackWaiting() + completed);
                            this.walker4wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker4WTotal(RawMaterials.Walkers.getWalker4WTotal() - completed);
                            Product.gigglyskins.setPatrioticSkins4W(Product.gigglyskins.getPatrioticSkins4W() + completed);
                            break;
                        case "Flowerific":
                            setFlowerificSkin4WPackWaiting(getFlowerificSkin4WPackWaiting() + completed);
                            this.walker4wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker4WTotal(RawMaterials.Walkers.getWalker4WTotal() - completed);
                            Product.gigglyskins.setFlowerificSkins4W(Product.gigglyskins.getFlowerificSkins4W() + completed);
                            break;
                        case "Military":
                            setMilitarySkin4WPackWaiting(getMilitarySkin4WPackWaiting() + completed);
                            this.walker4wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker4WTotal(RawMaterials.Walkers.getWalker4WTotal() - completed);
                            Product.gigglyskins.setMilitarySkins4W(Product.gigglyskins.getMilitarySkins4W() + completed);
                            break;
                    }
                    break;
                case "two-wheel":
                    switch (design) {
                        case "Wonderfall":
                            setWonderfallSkin2WpackWaiting(getWonderfallSkin2WPackWaiting() + completed);
                            this.walker2wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker2WTotal(RawMaterials.Walkers.getWalker2WTotal() - completed);
                            break;
                        case "Barktastic":
                            setBarktasticSkin2WPackWaiting(getBarktasticSkin2WPackWaiting() + completed);
                            this.walker2wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker2WTotal(RawMaterials.Walkers.getWalker2WTotal() - completed);
                            break;
                        case "Patriotic":
                            setPatrioticSkin2WPackWaiting(getPatrioticSkin2WPackWaiting() + completed);
                            this.walker2wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker2WTotal(RawMaterials.Walkers.getWalker2WTotal() - completed);
                            break;
                        case "Flowerific":
                            setFlowerificSkin2WPackWaiting(getFlowerificSkin2WPackWaiting() + completed);
                            this.walker2wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker2WTotal(RawMaterials.Walkers.getWalker2WTotal() - completed);
                            break;
                        case "Military":
                            setMilitarySkin2WPackWaiting(getMilitarySkin2WPackWaiting() + completed);
                            this.walker2wWrapWaiting -= completed;
                            RawMaterials.Walkers.setWalker2WTotal(RawMaterials.Walkers.getWalker2WTotal() - completed);
                            break;
                    }
                    break;
            }
        }
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
        setWonderfallSkin4WpackWaiting: function (newW) {
            this.wonderfallSkin4WPackWaiting = newW;
        },
        getWonderfallSkin4WPackWaiting: function () {
            return this.wonderfallSkin4WPackWaiting;
        },
        setWonderfallSkin2WPackWaiting: function (newWW) {
            this.wonderfallSkin2WPackWaiting = newWW;
        },
        getWonderfallSkin2WPackWaiting: function () {
            return this.wonderfallSkin2WPackWaiting;
        },
        setBarktasticSkin4WPackWaiting: function (newB) {
            this.barktasticSkin4WPackWaiting = newB;
        },
        getBarktasticSkin4WPackWaiting: function () {
            return this.barktasticSkin4WPackWaiting;
        },
        setBarktasticSkin2WPackWaiting: function (newBB) {
            this.barktasticSkin2WPackWaiting = newBB;
        },
        getBarktasticSkin2WPackWaiting: function () {
            return this.barktasticSkin2WPackWaiting;
        },
        setPatrioticSkin4WPackWaiting: function (newP) {
            this.patrioticSkin4WPackWaiting = newP;
        },
        getPatrioticSkin4WPackWaiting: function () {
            return this.patrioticSkin4WPackWaiting;
        },
        setPatrioticSkin2WPackWaiting: function (newPP) {
            this.PatrioticSkin2WPackWaiting = newPP;
        },
        getPatrioticSkin2WPackWaiting: function () {
            return this.patrioticSkin2WPackWaiting;
        },
        setFlowerificSkin4WPackWaiting: function (newF) {
            this.flowerificSkin4WPackWaiting = newF;
        },
        getFlowerificSkin4WPackWaiting: function () {
            return this.flowerificSkin4WPackWaiting;
        },
        setFlowerificSkin2WPackWaiting: function (newFF) {
            this.flowerificSkin2WPackWaiting = newFF;
        },
        getFlowerificSkin2WPackWaiting: function () {
            return this.flowerificSkin2WPackWaiting;
        },
        setMilitarySkin4WPackWaiting: function (newM) {
            this.militarySkin4WPackWaiting = newM;
        },
        getMilitarySkin4WPackWaiting: function () {
            return this.militarySkin4WPackWaiting;
        },
        setMilitarySkin2WPackWaiting: function (newMM) {
            this.militarySkin2WPackWaiting = newMM;
        },
        getMilitarySkin2WPackWaiting: function () {
            return this.militarySkin2WPackWaiting;
        },
        blisterPack: function (color, design, completed) {
            RawMaterials.BlisterCards.setTotalCards(RawMaterials.BlisterCards.getTotalCards() - completed);
            switch (color) {
                case "red":
                    switch (design) {
                        case "Paw":
                            RawMaterials.Blisters.setTotalPawBlisters(RawMaterials.Blisters.getTotalPawBlisters() - completed);
                            RawMaterials.Stickers.setRedTruckUPCTotal(RawMaterials.Stickers.getRedTruckUPCTotal() - completed);
                            Product.gigglyfeet.puppyPaw.setRdyShipRedPaws(Product.gigglyfeet.puppyPaw.getRdyShipRedPaws() + completed);
                            this.redPawBlisterWaiting -= completed;
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Paw":
                            RawMaterials.Blisters.setTotalPawBlisters(RawMaterials.Blisters.getTotalPawBlisters() - completed);
                            RawMaterials.Stickers.setBlueTruckUPCTotal(RawMaterials.Stickers.getBlueTruckUPCTotal() - completed);
                            Product.gigglyfeet.puppyPaw.setRdyShipBluePaws(Product.gigglyfeet.puppyPaw.getRdyShipBluePaws() + completed);
                            this.bluePawBlisterWaiting -= completed;
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Paw":
                            RawMaterials.Blisters.setTotalPawBlisters(RawMaterials.Blisters.getTotalPawBlisters() - completed);
                            RawMaterials.Stickers.setBlackTruckUPCTotal(RawMaterials.Stickers.getBlackTruckUPCTotal() - completed);
                            Product.gigglyfeet.puppyPaw.setRdyShipBlackPaws(Product.gigglyfeet.puppyPaw.getRdyShipBlackPaws() + completed);
                            this.blackPawBlisterWaiting -= completed;
                            break;
                    }
                    break;
            }
        },
        grillPackage: function (color, design, completed) {
            RawMaterials.GrillBoxes.setTotalGrillBoxes(RawMaterials.GrillBoxes.getTotalGrillBoxes() - completed);
            switch (color) {
                case "red":
                    switch (design) {
                        case "Truck":
                            RawMaterials.Stickers.setRedTruckUPCTotal(RawMaterials.Stickers.getRedTruckUPCTotal() - completed);
                            Product.gigglygrills.truckFront.setRdyShipRedTruck(Product.gigglygrills.truckFront.getRdyShipRedTruck() + completed);
                            this.redTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            RawMaterials.Stickers.setRedNoteboardUPCTotal(RawMaterials.Stickers.getRedNoteboardUPCTotal() - completed);
                            Product.gigglygrills.Noteboard.setRdyShipRedNoteboard(Product.gigglygrills.Noteboard.getRdyShipRedNoteboard() + completed);
                            this.redNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Truck":
                            RawMaterials.Stickers.setBlueTruckUPCTotal(RawMaterials.Stickers.getBlueTruckUPCTotal() - completed);
                            Product.gigglygrills.truckFront.setRdyShipBlueTruck(Product.gigglygrills.truckFront.getRdyShipBlueTruck() + completed);
                            this.blueTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            RawMaterials.Stickers.setBlueNoteboardUPCTotal(RawMaterials.Stickers.getBlueNoteboardUPCTotal() - completed);
                            Product.gigglygrills.Noteboard.setRdyShipBlueNoteboard(Product.gigglygrills.Noteboard.getRdyShipBlueNoteboard() + completed);
                            this.blueNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Truck":
                            RawMaterials.Stickers.setBlackTruckUPCTotal(RawMaterials.Stickers.getBlackTruckUPCTotal() - completed);
                            Product.gigglygrills.truckFront.setRdyShipBlackTruck(Product.gigglygrills.truckFront.getRdyShipBlackTruck() + completed);
                            this.blackTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            RawMaterials.Stickers.setBlackNoteboardUPCTotal(RawMaterials.Stickers.getBlackNoteboardUPCTotal() - completed);
                            Product.gigglygrills.Noteboard.setRdyShipBlackNoteboard(Product.gigglygrills.Noteboard.getRdyShipBlackNoteboard() + completed);
                            this.blackNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
            }
        },
        walkerPackage: function (walkerType, design, completed) {
            RawMaterials.WalkerBoxes.setTotalWalkerBoxes(RawMaterials.WalkerBoxes.getTotalWalkerBoxes() - completed);
            RawMaterials.Polybags.setTotalPolybags(RawMaterials.Polybags.getTotalPolybags() - completed);
            switch (walkerType) {
                case "four-wheel":
                    switch (design) {
                        case "Wonderfall":
                            RawMaterials.Stickers.setWonderfallSkin4wUPCTotal(RawMaterials.Stickers.getWonderfallSkin4wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipWonderfallSkins4W(Product.gigglyskins.getRdyShipWonderfallSkins4W() + completed);
                            this.wonderfallSkin4WPackWaiting -= completed;
                            break;
                        case "Barktastic":
                            RawMaterials.Stickers.setBarktasticSkin4wUPCTotal(RawMaterials.Stickers.getBarktasticSkin4wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipBarktasticSkins4W(Product.gigglyskins.getRdyShipBarktasticSkins4W() + completed);
                            this.barktasticSkin4WPackWaiting -= completed;
                            break;
                        case "Flowerific":
                            RawMaterials.Stickers.setFlowerificSkin4wUPCTotal(RawMaterials.Stickers.getFlowerificSkin4wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipFlowerificSkins4W(Product.gigglyskins.getRdyShipFlowerificSkins4W() + completed);
                            this.flowerificSkin4WPackWaiting -= completed;
                            break;
                        case "Patriotic":
                            RawMaterials.Stickers.setPatrioticSkin4wUPCTotal(RawMaterials.Stickers.getPatrioticSkin4wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipPatrioticSkins4W(Product.gigglyskins.getRdyShipPatrioticSkins4W() + completed);
                            this.patrioticSkin4WPackWaiting -= completed;
                            break;
                        case "Military":
                            RawMaterials.Stickers.setMilitarySkin4wUPCTotal(RawMaterials.Stickers.setMilitarySkin4wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipMilitarySkins4W(Product.gigglyskins.getRdyShipMilitarySkins4W() + completed);
                            this.militarySkin4WPackWaiting -= completed;
                            break;
                    }
                    break;
                case "two-wheel":
                    switch (design) {
                        case "Wonderfall":
                            RawMaterials.Stickers.setWonderfallSkin2wUPCTotal(RawMaterials.Stickers.getWonderfallSkin2wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipWonderfallSkins2W(Product.gigglyskins.getRdyShipWonderfallSkins2W() + completed);
                            this.wonderfallSkin2WPackWaiting -= completed;
                            break;
                        case "Barktastic":
                            RawMaterials.Stickers.setBarktasticSkin2wUPCTotal(RawMaterials.Stickers.getBarktasticSkin2wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipBarktasticSkins2W(Product.gigglyskins.getRdyShipBarktasticSkins2W() + completed);
                            this.barktasticSkin2WPackWaiting -= completed;
                            break;
                        case "Flowerific":
                            RawMaterials.Stickers.setFlowerificSkin2wUPCTotal(RawMaterials.Stickers.getFlowerificSkin2wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipFlowerificSkins2W(Product.gigglyskins.getRdyShipFlowerificSkins2W() + completed);
                            this.flowerificSkin2WPackWaiting -= completed;
                            break;
                        case "Patriotic":
                            RawMaterials.Stickers.setPatrioticSkin2wUPCTotal(RawMaterials.Stickers.getPatrioticSkin2wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipPatrioticSkins2W(Product.gigglyskins.getRdyShipPatrioticSkins2W() + completed);
                            this.patrioticSkin2WPackWaiting -= completed;
                            break;
                        case "Military":
                            RawMaterials.Stickers.setMilitarySkin2wUPCTotal(RawMaterials.Stickers.getMilitarySkin2wUPCTotal() - completed);
                            Product.gigglyskins.setRdyShipMilitarySkins2W(Product.gigglyskins.getRdyShipMilitarySkins2W() + completed);
                            this.militarySkin2WPackWaiting -= completed;
                            break;
                    }
            }
        }
    }

};
