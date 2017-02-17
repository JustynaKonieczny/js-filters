import { Injectable } from "@angular/core"
let jpegjs = require("node_modules/jpeg-js")

@Injectable()
export class FiltersService {
    modifiedData = {
        image: {},
        pixels: Uint8ClampedArray.prototype
    }

    blur(image, data) {

    }

    grayscale(image, data) {
        debugger;
        //@TODO: implement factor slider to set the image brighter/darker
        //@TODO: refactor code, logic and types
        // let factor = 0.0
        let width: number = image.width
        let height: number = image.height
        let brightness: number = 0
        let newImage: ImageData
        let rawData = jpegjs.decode(data, true)
        let modifiedData = new Uint8ClampedArray(rawData.data)

        for(let i=0; i<modifiedData.length; i+=4) {
            brightness = Math.floor((modifiedData[i] + modifiedData[i+1] + modifiedData[i+2])/3)
            modifiedData[i] = brightness
            modifiedData[i+1] = brightness
            modifiedData[i+2] = brightness
        }

        //always use ImageData as var type being loaded onto canvas, otterwise C: it won't work
        newImage = new ImageData(modifiedData, width, height)
        this.modifiedData.image = newImage
        this.modifiedData.pixels = modifiedData
        return this.modifiedData
    }

    invert(data) {

    }
}