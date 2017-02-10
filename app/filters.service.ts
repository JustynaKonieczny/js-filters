import { Injectable } from "@angular/core"

@Injectable()
export class FiltersService {
    modifiedData: Object = {
        image: {},
        data: Uint8Array
    }

    blur(image, data) {

    }

    grayscale(image, data) {
        debugger;
        //@TODO: implement factor slider to set the image brighter/darker
        // let factor = 0.0
        let width: number = image.width
        let height: number = image.height
        let brightness: number = 0
        let newImage = new ImageData(new Uint8ClampedArray(4*width*height), width, height)
        let arrayData = data

        for(let i=0; i<arrayData.length; i+=4) {
            brightness = Math.floor((arrayData[i] + arrayData[i+1] + arrayData[i+2])/3)
            arrayData[i] = brightness
            arrayData[i+1] = brightness
            arrayData[i+2] = brightness
        }

        newImage.data = arrayData
        this.modifiedData = {
            image: newImage,
            pixels: arrayData
        }
        return this.modifiedData
    }

    invert(data) {

    }
}