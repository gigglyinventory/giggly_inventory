'use strict'
//Production = {
class Belovac {
    set redWaiting(red) {
        this._redWaiting = red;
    }
    get redWaiting() {
        return this._redWaiting;
    }
    set blueWaiting(blue) {
        this._blueWaiting = blue;
    }
    get blueWaiting() {
        return this._blueWaiting;
    }
    set blackWaiting(black) {
        this._blackWaiting = black;
    }
    get blackWaiting() {
        return this._blackABSWaiting;
    }
    set redLoss(rLoss) {
        this._redABSLoss = rLoss;
    }
    get redLoss() {
        return this._redABSLoss;
    }
    set blueLoss(bLoss) {
        this._blueABSLoss = bLoss;
    }
    get blueLoss() {
        return this._blueABSLoss;
    }
    set blackLoss(blLoss) {
        this._blackABSLoss = blLoss;
    }
    get blackLoss() {
        return this._blackABSLoss;
    }
    process(color, designName, completed, loss) {
        switch (color) {
            case "red":
                this.redABSLoss = this.redABSLoss + loss
                RawMaterials.ABSPlastic.setABSRed(RawMaterials.ABSPlastic.getABSRed() - completed - loss);
                switch (designName) {
                    case "Truck":
                        Gigglygrills.redTruck = Gigglygrills.redTruck + completed;
                        Cutting.redTruckGWaiting = redTruckGWaiting + completed;
                        this.redWaiting = this.redWaiting - completed - loss
                        break;
                    case "Noteboard":
                        Gigglygrills.redNoteboard = Gigglygrills.redNoteboard + completed;
                        Cutting.redNoteboardGWaiting = Cutting.redNoteboardGWaiting + completed;
                        this.redWaiting = this.redWaiting - completed - loss;
                        break;
                }
                break;
            case "blue":
                this.blueLoss = this.blueLoss + loss;
                RawMaterials.ABSPlastic.setABSBlue(RawMaterials.ABSPlastic.getABSBlue() - completed - loss);
                switch (designName) {
                    case "Truck":
                        Gigglygrills.blueTruck = Gigglygrills.blueTruck + completed;
                        Cutting.blueTruckGWaiting = Cutting.blueTruckGWaiting + completed;
                        this.blueWaiting = this.blueWaiting - comleted - loss;
                        break;
                    case "Noteboard":
                        Gigglygrills.blueNoteboard = Gigglygrills.blueNoteboard + completed;
                        Cutting.blueNoteboardGWaiting = Cutting.blueNoteboardGWaiting + completed;
                        this.blueWaiting = this.blueWaiting - completed - loss;
                        break;
                }
                break;
            case "black":
                this.blackLoss = this.blackLoss + loss;
                RawMaterials.ABSPlastic.setABSBlack(RawMaterials.ABSPlastic.getABSBlack() - completed - loss);
                switch (designName) {
                    case "Truck":
                        Gigglygrills.blackTruck = Gigglygrills.blackTruck + completed;
                        Cutting.blackTruckGWaiting = Cutting.blackTruckGWaiting + completed;
                        this.blackWaiting = this.blackWaiting - completed - loss;
                        break;
                    case "Noteboard":
                        Gigglygrills.blackNoteboard = Gigglygrills.blackNoteboard + completed;
                        Cutting.blackNoteboardGWaiting = cutting.blackNoteboardGWaiting + completed;
                        this.blackWaiting = this.blackWaiting - completed - loss;
                        break;
                }
                break;
        }
    }
}
class Cutting{
    //Note: Most of the variables in the comments below don't have set-get methods yet
    // redTruckGuillWaiting,
    // blueTruckGuillWaiting,
    // blackTruckGuillWaiting,
    // redNoteboardGuillWaiting,
    // blueNoteboardGuillWaiting,
    // blackNoteboardGuillWaiting,
    // redTruckGuillLoss,
    // blueTruckGuillLoss,
    // blackTruckGuillLoss,
    // redNoteboardGuillLoss,
    // blueNoteboardGuillLoss,
    // blackNoteboardGuillLoss,
    // redTruckRotoWaiting,
    // blueTruckRotoWaiting,
    // blackTruckRotoWaiting,
    // redNoteboardRotoWaiting,
    // blueNoteboardRotoWaiting,
    // blackNoteboardRotoWaiting,
    // redTruckRotoLoss,
    // blueTruckRotoLoss,
    // blackTruckRotoLoss,
    // redNoteboardRotoLoss,
    // blueNoteboardRotoLoss,
    // blackNoteboardRotoLoss,
    // redTruckSandWaiting,
    // blueTruckSandWaiting,
    // blackTruckSandWaiting,
    // redNoteboardSandWaiting,
    // blueNoteboardSandWaiting,
    // blackNoteboardSandWaiting,
    // redTruckSandLoss,
    // blueTruckSandLoss,
    // blackTruckSandLoss,
    // redNoteboardSandLoss,
    // blueNoteboardSandLoss,
    // blackNoteboardSandLoss,
    set redTruckGWaiting(rWait){
        this._redTruckGWaiting = rWait;
    }
    get redTruckGWaiting(){
        return this._redTruckGWaiting;
    }
    set blueTruckGWaiting(bWait){
        this._blueTruckGWaiting = bWait;
    }
    get blueTruckGWaiting(){
        return this._blueTruckGWaiting;
    }
    set blackTruckGWaiting(blWait){
        this._blackTruckGWaiting = blWait;
    }
    get blackTruckGWaiting(){
        return this._blackTruckGWaiting;
    }
    set redNoteboardGWaiting(rWait){
        this._redNoteboardGWaiting = rWait;
    }
    get redNoteboardGWaiting(){
        return this._redNoteboardGWaiting;
    }
    set blueNoteboardGWaiting(bWait){
        this._blueNoteboardGWaiting = bWait;
    }
    get blueNoteboardGWaiting(){
        return this._blueNoteboardGWaiting;
    }
    set blackNoteboardGWaiting(blWait){
        this._blackNoteboardGWaiting = blWait;
    }
    get blackNoteboardGWaiting(){
        return this._blackNoteboardGWaiting;
    }
    guillotine(color, designName, completed, loss) {
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
    }
    rotozip (color, designName, completed, loss) {
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
    }
    sanding (color, designName, completed, loss) {
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
}
class Assembly {
    //Note: Most of the variables in the comments below don't have set-get methods yet
    // redTruckVelcroWaiting,
    // blueTruckVelcroWaiting,
    // blackTruckVelcroWaiting,
    // redNoteboardVelcroWaiting,
    // blueNoteboardVelcroWaiting,
    // blackNoteboardVelcroWaiting,
    // redTruckVelcroLoss,
    // blueTruckVelcroLoss,
    // blackTruckVelcroLoss,
    // redNoteboardVelcroLoss,
    // blueNoteboardVelcroLoss,
    // blackNoteboardVelcroLoss,
    // redTruckStickerWaiting,
    // blueTruckStickerWaiting,
    // blackTruckStickerWaiting,
    // redNoteboardStickerWaiting,
    // blueNoteboardStickerWaiting,
    // blackNoteboardStickerWaiting,
    // redPawTrimWaiting,
    // bluePawTrimWaiting,
    // blackPawTrimWaiting,
    // redPawTrimLoss,
    // bluePawTrimLoss,
    // blackPawTrimLoss,
    // redPawScrewWaiting,
    // bluePawScrewWaiting,
    // blackPawScrewWaiting,
    // redPawScrewLoss,
    // bluePawScrewLoss,
    // blackPawScrewLoss,
    // walker4wWrapWaiting,
    // walker2wWrapWaiting,
    set Walker2wWrapWaiting(newW) {
        this._walker2wWrapWaiting = newW;
    }
    get Walker2wWrapWaiting() {
        return this._walker2wWrapWaiting;
    }
    set Walker4wWrapWaiting(newW) {
        this._walker4wWrapWaiting = newW;
    }
    get Walker4wWrapWaiting() {
        return this._walker4wWrapWaiting;
    }
    set RedTruckVWaiting(newW) {
        this._redTruckVelcroWaiting = newW;
    }
    get RedTruckVWaiting() {
        return this._redTruckVelcroWaiting;
    }
    set BlueTruckVWaiting(newW) {
        this._blueTruckVelcroWaiting = newW;
    }
    get BlueTruckVWaiting() {
        return this._blueTruckVelcroWaiting;
    }
    set BlackTruckVWaiting(newW) {
        this._blackTruckVelcroWaiting = newW;
    }
    get BlackTruckVWaiting() {
        return blackTruckVelcroWaiting;
    }
    set RedNoteboardVWaiting(newW) {
        this._redNoteboardVelcroWaiting = newW;
    }
    get RedNoteboardVWaiting() {
        return this._redNoteboardVelcroWaiting;
    }
    set BlueNoteboardVWaiting(newW) {
        this._blueNoteboardVelcroWaiting = newW;
    }
    get BlueNoteboardVWaiting() {
        return this._blueNoteboardVelcroWaiting;
    }
    set BlackNoteboardVWaiting(newW) {
        this._blackNoteboardVelcroWaiting = newW;
    }
    get BlackNoteboardVWaiting() {
        return this._blackNoteboardVelcroWaiting;
    }
    velcro (color, designName, completed, loss) {
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
    }
    stickers(color, designName, completed) {
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
    }
    trim(color, design, completed, loss) {
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
    }
    screw (color, design, completed, loss) {
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
    }
    wrap (walkerType, design, completed) {
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
}
class Shipping{
    set redPawBlisterWaiting(newWaiting) {
        this.redPawBlisterWaiting = newWaiting;
    }
    get redPawBlisterWaiting() {
        return this.redPawBlisterWaiting;
    }
    set bluePawBlisterWaiting(newWaiting) {
        this.bluePawBlisterWaiting = newWaiting;
    }
    get bluePawBlisterWaiting() {
        return this.bluePawBlisterWaiting;
    }
    set blackPawBlisterWaiting(newWaiting) {
        this.blackPawBlisterWaiting = newWaiting;
    }
    get blackPawBlisterWaiting() {
        return this.blackPawBlisterWaiting;
    }
    set redTruckPackWaiting(newWaiting) {
        this.redTruckPackWaiting = newWaiting;
    }
    get redTruckPackWaiting() {
        return this.redTruckPackWaiting;
    }
    set blueTruckPackWaiting(newWaiting) {
        this.blueTruckPackWaiting = newWaiting;
    }
    get blueTruckPackWaiting() {
        return this.blueTruckPackWaiting;
    }
    set blackTruckPackWaiting(newWaiting) {
        this.blackTruckPackWaiting = newWaiting;
    }
    get blackTruckPackWaiting() {
        return this.blackTruckPackWaiting;
    }
    set redNoteboardPackWaiting(newWaiting) {
        this.redNoteboardPackWaiting = newWaiting;
    }
    get redNoteboardPackWaiting() {
        return this.redNoteboardPackWaiting;
    }
    set blueNoteboardPackWaiting(newWaiting) {
        this.blueNoteboardPackWaiting = newWaiting;
    }
    get blueNoteboardPackWaiting() {
        return this.blueNoteboardPackWaiting;
    }
    set blackNoteboardPackWaiting(newWaiting) {
        this.blackNoteboardPackWaiting = newWaiting;
    }
    get blackNoteboardPackWaiting() {
        return this.blackNoteboardPackWaiting;
    }
    set wonderfallSkin4WpackWaiting(newW) {
        this.wonderfallSkin4WPackWaiting = newW;
    }
    get wonderfallSkin4WPackWaiting() {
        return this.wonderfallSkin4WPackWaiting;
    }
    set wonderfallSkin2WPackWaiting(newWW) {
        this.wonderfallSkin2WPackWaiting = newWW;
    }
    get wonderfallSkin2WPackWaiting() {
        return this.wonderfallSkin2WPackWaiting;
    }
    set barktasticSkin4WPackWaiting(newB) {
        this.barktasticSkin4WPackWaiting = newB;
    }
    get barktasticSkin4WPackWaiting() {
        return this.barktasticSkin4WPackWaiting;
    }
    set barktasticSkin2WPackWaiting(newBB) {
        this.barktasticSkin2WPackWaiting = newBB;
    }
    get barktasticSkin2WPackWaiting() {
        return this.barktasticSkin2WPackWaiting;
    }
    set patrioticSkin4WPackWaiting(newP) {
        this.patrioticSkin4WPackWaiting = newP;
    }
    get patrioticSkin4WPackWaiting() {
        return this.patrioticSkin4WPackWaiting;
    }
    set patrioticSkin2WPackWaiting(newPP) {
        this.PatrioticSkin2WPackWaiting = newPP;
    }
    get patrioticSkin2WPackWaiting() {
        return this.patrioticSkin2WPackWaiting;
    }
    set flowerificSkin4WPackWaiting(newF) {
        this.flowerificSkin4WPackWaiting = newF;
    }
    get flowerificSkin4WPackWaiting() {
        return this.flowerificSkin4WPackWaiting;
    }
    set flowerificSkin2WPackWaiting(newFF) {
        this.flowerificSkin2WPackWaiting = newFF;
    }
    get flowerificSkin2WPackWaiting() {
        return this.flowerificSkin2WPackWaiting;
    }
    set militarySkin4WPackWaiting(newM) {
        this.militarySkin4WPackWaiting = newM;
    }
    get militarySkin4WPackWaiting() {
        return this.militarySkin4WPackWaiting;
    }
    set militarySkin2WPackWaiting(newMM) {
        this.militarySkin2WPackWaiting = newMM;
    }
    get militarySkin2WPackWaiting() {
        return this.militarySkin2WPackWaiting;
    }
    blisterPack(color, design, completed) {
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
    }
    grillPackage(color, design, completed) {
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
    }
    walkerPackage(walkerType, design, completed) {
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


