const db = require('../util/database');

module.exports = class Production {
    constructor(date, process, design, color, completed, loss) {
        this.date = date;
        this.process = process;
        this.design = design;
        this.color = color;
        this.completed = completed;
        this.loss = loss;
    }

    save() {
        
    }

    // a function to move products along in production
    static process(process, design, color, completed, loss) {
        switch (process) {
            case "belovac":
                switch (color) {
                    case "red":
                        // increase the total loss from the day's loss
                        // () subtract the completed AND lost plastic from the total raw materials red plastic
                        switch (design) {
                            case "Truck":
                                // -- Update Product Class design/color total (add completed)
                                // -- Update Production step, add completed to guillotine waiting status
                                //  subtract completed AND loss from the Raw Material plastic waiting
                                break;
                            case "Noteboard":
                                // Update Product Class design/color total (add completed)
                                // Update Production step, add completed to guillotine waiting status
                                // subtract completed AND loss from the Raw Material plastic waiting
                                break;
                        }
                        break;
                    case "blue":
                        // increase the total loss from the day's loss
                        // Subtract completed AND lost plastic from total raw materials blue plastic
                        switch (design) {
                            case "Truck":
                                // Update Product class design/color total (add completed)
                                // Update Production step, add completed to guillotine waiting status
                                // subtract completed AND loss from the Raw Material plastic waiting
                                break;
                            case "Noteboard":
                                // update product class design/color total (add completed)
                                // update Production step, add completed to guillotine waiting status
                                // subtract completed AND loss from the Raw Material plastic waiting
                                break;
                        }
                        break;
                    case "black":
                        // increase the total loss from the day's loss
                        // subtract completed AND lost plastic from total raw materials blue plastic
                        switch (design) {
                            case "Truck":
                                // Update Product class design/color total (add completed)
                                // update Production step, add completed to guillotine waiting status
                                // subtract completed AND loss from the Raw Material plastic waiting
                                break;
                            case "Noteboard":
                                // Update Product class design/color total (add completed)
                                // update Production step, add completed to guillotine waiting status
                                // subtract completed AND loss from the Raw Material plastic waiting
                                break;
                        }
                        break;
                }
                break;
            case "guillotine":
                switch (color) {
                    case "red":
                        switch (design) {
                            case "Truck":
                                // Update production step, add completed to rotozip waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from guillotine waiting status
                                break;
                            case "Noteboard":
                                // Update production step, add completed to rotozip waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from guillotine waiting status
                                break;
                        }
                        break;
                    case "blue":
                        switch (design) {
                            case "Truck":
                                // Update production step, add completed to rotozip waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from guillotine waiting status
                                break;
                            case "Noteboard":
                                // Update production step, add completed to rotozip waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from guillotine waiting status
                                break;
                        }
                        break;
                    case "black":
                        switch (design) {
                            case "Truck":
                                // Update production step, add completed to rotozip waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from guillotine waiting status
                                break;
                            case "Noteboard":
                                // Update production step, add completed to rotozip waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from guillotine waiting status
                                break;
                        }
                        break;
                }
                break;
            case "rotozip":
                switch (color) {
                    case "red":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to sanding waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from rotozip waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to sanding waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from rotozip waiting status
                                break;
                        }
                        break;
                    case "blue":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to sanding waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from rotozip waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to sanding waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from rotozip waiting status
                                break;
                        }
                        break;
                    case "black":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to sanding waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from rotozip waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to sanding waiting status
                                // update total design/color loss with the day's loss
                                // update production step, subtract design/color completed AND loss from rotozip waiting status
                                break;
                        }
                        break;
                }
                break;
            case "sanding":
                switch (color) {
                    case "red":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to velcro waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to velcro waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                        }
                        break;
                    case "blue":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to velcro waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to velcro waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                        }
                        break;
                    case "black":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to velcro waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to velcro waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                        }
                        break;
                }
                break;
            case "velcro":
                // Update raw materials grommets, subtract 4 grommets for every 1 part completed
                // update raw materials velcro, subtract 4 velcro for every 1 part completed
                switch (color) {
                    case "red":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to sticker waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to sticker waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                        }
                        break;
                    case "blue":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to sticker waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to sticker waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                        }
                        break;
                    case "black":
                        switch (design) {
                            case "Truck":
                                // update production step, add completed design/color to sticker waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                            case "Noteboard":
                                // update production step, add completed design/color to sticker waiting status
                                // update total design/color step loss with the day's loss
                                // update production step, subtract design/color completed AND loss from sanding waiting status
                                break;
                        }
                        break;
            }
            break;
        case "stickers":
            switch (color) {
                case "red":
                    switch (design) {
                        case "Truck":
                            // update raw materials, subtract completed from total truck stickers
                            // update production step, add completed design/color to pack waiting status
                            // update production step, subtract design/color comleted from sticker waiting status
                            break;
                        case "Noteboard":
                            // update raw materials, subtract completed from total truck stickers
                            // update production step, add completed design/color to pack waiting status
                            // update production step, subtract design/color comleted from sticker waiting status
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Truck":
                            // update raw materials, subtract completed from total truck stickers
                            // update production step, add completed design/color to pack waiting status
                            // update production step, subtract design/color comleted from sticker waiting status
                            break;
                        case "Noteboard":
                            // update raw materials, subtract completed from total truck stickers
                            // update production step, add completed design/color to pack waiting status
                            // update production step, subtract design/color comleted from sticker waiting status
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Truck":
                            // update raw materials, subtract completed from total truck stickers
                            // update production step, add completed design/color to pack waiting status
                            // update production step, subtract design/color comleted from sticker waiting status
                            break;
                        case "Noteboard":
                            // update raw materials, subtract completed from total truck stickers
                            // update production step, add completed design/color to pack waiting status
                            // update production step, subtract design/color comleted from sticker waiting status
                            break;
                    }
                    break;
            }
            break;
        case "trim":
            switch (color) {
                case "red":
                    // update raw materials, subtract loss from total design/color gigglyfeet
                    switch (design) {
                        case "Paw":
                            // update production step, add completed design/color to screw waiting status
                            // add today's loss to design/color total loss
                            // update production step, subtract design/color completed AND loss from trim waiting status
                            break;
                    }
                    break;
                case "blue":
                    // update raw materials, subtract loss from total design/color gigglyfeet
                    switch (design) {
                        case "Paw":
                            // update production step, add completed design/color to screw waiting status
                            // add today's loss to design/color total loss
                            // update production step, subtract design/color completed AND loss from trim waiting status
                            break;
                    }
                    break;
                case "black":
                    // update raw materials, subtract loss from total design/color gigglyfeet
                    switch (design) {
                        case "Paw":
                            // update production step, add completed design/color to screw waiting status
                            // add today's loss to design/color total loss
                            // update production step, subtract design/color completed AND loss from trim waiting status
                            break;
                    }
                    break;
            }
            break;
        case "screw":
            // update raw materials, subtract completed from screw total
            // update raw materials, subtract completed from core total
            switch (color) {
                case "red":
                    // update raw materials, add loss to design/color total loss
                    switch (design) {
                        case "Paw":
                            // update production step, add design/color completed to blister waiting status
                            // update production step loss, add today's design/color loss total loss
                            // update production step, subtract design/total completed AND loss from screw waiting status
                            break;
                    }
                    break;
                case "blue":
                    // update raw materials, add loss to design/color total loss
                    switch (design) {
                        case "Paw":
                            // update production step, add design/color completed to blister waiting status
                            // update production step loss, add today's design/color loss total loss
                            // update production step, subtract design/total completed AND loss from screw waiting status
                            break;
                    }
                    break;
                case "black":
                    // update raw materials, add loss to design/color total loss
                    switch (design) {
                        case "Paw":
                            // update production step, add design/color completed to blister waiting status
                            // update production step loss, add today's design/color loss total loss
                            // update production step, subtract design/total completed AND loss from screw waiting status
                            break;
                    }
                    break;
            }
            break;
        case "wrap":
            switch (walkerType) {
                case "four-wheel":
                    switch (design) {
                        case "Wonderfall":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Barktastic":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Patriotic":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Flowerific":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Military":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock 
                            break;
                    }
                    break;
                case "two-wheel":
                    switch (design) {
                        case "Wonderfall":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Barktastic":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Patriotic":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Flowerific":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                        case "Military":
                            // update production step, add design/type completed to pack waiting status
                            // update production step, subtract design/type completed from wrap waiting
                            // update raw materials, subtract completed from walkertype total
                            // update product, add completed design/type to total stock
                            break;
                    }
                    break;
            }
            break;
        case "blisterpack":
            // update raw materials, subtract completed from total blistercards
            switch (color) {
                case "red":
                    switch (design) {
                        case "Paw":
                            // update raw materials, subtract completed design from total blisters of that design
                            // update raw materials, subtract completed from design/color UPC total
                            // update Product, add completed design/paw to total rdyShip of that product
                            // update production step, subtract completed from design/color blister waiting
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Paw":
                            // update raw materials, subtract completed design from total blisters of that design
                            // update raw materials, subtract completed from design/color UPC total
                            // update Product, add completed design/paw to total rdyShip of that product
                            // update production step, subtract completed from design/color blister waiting
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Paw":
                            // update raw materials, subtract completed design from total blisters of that design
                            // update raw materials, subtract completed from design/color UPC total
                            // update Product, add completed design/paw to total rdyShip of that product
                            // update production step, subtract completed from design/color blister waiting
                            break;
                    }
                    break;
            }
            break;
        case "grillpackage":
            // update raw materials, subtract completed from grill boxes total
            switch (color) {
                case "red":
                    switch (design) {
                        case "Truck":
                            // update raw materials, subtract completed from design/color UPC total
                            // update Product, add completed to design/color rdyShip total
                            this._redTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            Stickers.setRedNoteboardUPCTotal(Stickers.getRedNoteboardUPCTotal() - completed); //
                            Gigglygrills.Noteboard.setRdyShipRedNoteboard(Gigglygrills.Noteboard.getRdyShipRedNoteboard() + completed); //
                            this._redNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
                case "blue":
                    switch (design) {
                        case "Truck":
                            Stickers.setBlueTruckUPCTotal(Stickers.getBlueTruckUPCTotal() - completed); //
                            Gigglygrills.truckFront.setRdyShipBlueTruck(Gigglygrills.truckFront.getRdyShipBlueTruck() + completed); //
                            this._blueTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            Stickers.setBlueNoteboardUPCTotal(Stickers.getBlueNoteboardUPCTotal() - completed); //
                            Gigglygrills.Noteboard.setRdyShipBlueNoteboard(Gigglygrills.Noteboard.getRdyShipBlueNoteboard() + completed); //
                            this._blueNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
                case "black":
                    switch (design) {
                        case "Truck":
                            Stickers.setBlackTruckUPCTotal(Stickers.getBlackTruckUPCTotal() - completed); //
                            Gigglygrills.truckFront.setRdyShipBlackTruck(Gigglygrills.truckFront.getRdyShipBlackTruck() + completed); //
                            this._blackTruckPackWaiting -= completed;
                            break;
                        case "Noteboard":
                            Stickers.setBlackNoteboardUPCTotal(Stickers.getBlackNoteboardUPCTotal() - completed); //
                            Gigglygrills.Noteboard.setRdyShipBlackNoteboard(Gigglygrills.Noteboard.getRdyShipBlackNoteboard() + completed); //
                            this._blackNoteboardPackWaiting -= completed;
                            break;
                    }
                    break;
            }
            break;
        case "walkerpackage":
            WalkerBoxes.setTotalWalkerBoxes(RawMaterials.WalkerBoxes.getTotalWalkerBoxes() - completed); //
            Polybags.setTotalPolybags(RawMaterials.Polybags.getTotalPolybags() - completed); //
            switch (walkerType) {
                case "four-wheel":
                    switch (design) {
                        case "Wonderfall":
                            Stickers.setWonderfallSkin4wUPCTotal(Stickers.getWonderfallSkin4wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipWonderfallSkins4W(Gigglyskins.getRdyShipWonderfallSkins4W() + completed); //
                            this._wonderfallSkin4WPackWaiting -= completed;
                            break;
                        case "Barktastic":
                            Stickers.setBarktasticSkin4wUPCTotal(Stickers.getBarktasticSkin4wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipBarktasticSkins4W(Gigglyskins.getRdyShipBarktasticSkins4W() + completed); //
                            this._barktasticSkin4WPackWaiting -= completed;
                            break;
                        case "Flowerific":
                            Stickers.setFlowerificSkin4wUPCTotal(Stickers.getFlowerificSkin4wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipFlowerificSkins4W(Gigglyskins.getRdyShipFlowerificSkins4W() + completed); //
                            this._flowerificSkin4WPackWaiting -= completed;
                            break;
                        case "Patriotic":
                            Stickers.setPatrioticSkin4wUPCTotal(Stickers.getPatrioticSkin4wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipPatrioticSkins4W(Gigglyskins.getRdyShipPatrioticSkins4W() + completed); //
                            this._patrioticSkin4WPackWaiting -= completed;
                            break;
                        case "Military":
                            Stickers.setMilitarySkin4wUPCTotal(Stickers.setMilitarySkin4wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipMilitarySkins4W(Gigglyskins.getRdyShipMilitarySkins4W() + completed); //
                            this._militarySkin4WPackWaiting -= completed;
                            break;
                    }
                    break;
                case "two-wheel":
                    switch (design) {
                        case "Wonderfall":
                            Stickers.setWonderfallSkin2wUPCTotal(Stickers.getWonderfallSkin2wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipWonderfallSkins2W(Gigglyskins.getRdyShipWonderfallSkins2W() + completed); //
                            this._wonderfallSkin2WPackWaiting -= completed;
                            break;
                        case "Barktastic":
                            Stickers.setBarktasticSkin2wUPCTotal(Stickers.getBarktasticSkin2wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipBarktasticSkins2W(Gigglyskins.getRdyShipBarktasticSkins2W() + completed); //
                            this._barktasticSkin2WPackWaiting -= completed;
                            break;
                        case "Flowerific":
                            Stickers.setFlowerificSkin2wUPCTotal(Stickers.getFlowerificSkin2wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipFlowerificSkins2W(Gigglyskins.getRdyShipFlowerificSkins2W() + completed); //
                            this._flowerificSkin2WPackWaiting -= completed;
                            break;
                        case "Patriotic":
                            Stickers.setPatrioticSkin2wUPCTotal(Stickers.getPatrioticSkin2wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipPatrioticSkins2W(Gigglyskins.getRdyShipPatrioticSkins2W() + completed); //
                            this._patrioticSkin2WPackWaiting -= completed;
                            break;
                        case "Military":
                            Stickers.setMilitarySkin2wUPCTotal(Stickers.getMilitarySkin2wUPCTotal() - completed); //
                            Gigglyskins.setRdyShipMilitarySkins2W(Gigglyskins.getRdyShipMilitarySkins2W() + completed); //
                            this._militarySkin2WPackWaiting -= completed;
                            break;
                    }
            }
            break;
        } 
    }
}

