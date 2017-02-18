import { Injectable } from "@angular/core"
let jpegjs = require("node_modules/jpeg-js")

@Injectable()
export class FiltersService {
    modifiedData: {}

    blur(image, data) {

    }

    grayscale(currentImageData) {
        debugger;
        //@TODO: implement factor slider to set the image brighter/darker
        //@TODO: refactor code, logic and types
        // let factor = 0.0
        let width: number = currentImageData.width
        let height: number = currentImageData.height
        let brightness: number = 0
        let newImage: ImageData
        let newPixels = currentImageData.data

        for(let i=0; i<newPixels.length; i+=4) {
            brightness = Math.floor((newPixels[i] + newPixels[i+1] + newPixels[i+2])/3)
            newPixels[i] = brightness
            newPixels[i+1] = brightness
            newPixels[i+2] = brightness
        }

        //always use ImageData as var type being loaded onto canvas, otterwise C: it won't work
        newImage = new ImageData(newPixels, width, height)
        return newImage
    }

    invert(data) {

    }
}