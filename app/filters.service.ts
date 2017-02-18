import { Injectable } from "@angular/core"

@Injectable()
export class FiltersService {
    modifiedData: {}

    blur(image, data) {

    }

    grayscale(currentImageData) {
        //@TODO: implement factor slider to set the image brighter/darker
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

        newImage = new ImageData(newPixels, width, height)
        return newImage
    }

    invert(currentImageData) {
        let width: number = currentImageData.width
        let height: number = currentImageData.height
        let newPixels = currentImageData.data

        for(let i=0; i<newPixels.length; i+=4) {
            newPixels[i] = Math.abs(newPixels[i] - 255)
            newPixels[i+1] = Math.abs(newPixels[i+1] - 255)
            newPixels[i+2] = Math.abs(newPixels[i+2] - 255)
        }

        let newImage = new ImageData(newPixels, width, height)
        return newImage
    }
}