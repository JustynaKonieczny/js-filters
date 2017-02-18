import { Component } from "@angular/core"
import { UtilService } from "../util.service"
import { ImageService } from "../image.service"
import { FiltersService } from "../filters.service";
let jpegjs = require("node_modules/jpeg-js")

@Component({
    moduleId: module.id,
    selector: "app-header",
    templateUrl: "./header.component.html",
})

export class Header {
    constructor(private _UtilService: UtilService, private _ImageService: ImageService, private _FiltersService: FiltersService) {}

    handleOpenFile() {
        this._UtilService.openFileDialog()
            .then(data => {
                if(data) {
                    let decodedData = jpegjs.decode(data)
                    let decodedImgObject = new ImageData(new Uint8ClampedArray(decodedData.data), decodedData.width, decodedData.height)
                    this._ImageService.setImageData(decodedImgObject)
                    let imgObj = this._UtilService.convertImageToObject(data)
                    this._ImageService.setOriginalImageObject(imgObj)
                }
            })
            .catch(err => {
                console.log("Error loading image data from file.", err)
            })
    }

    handleSaveFile() {
        this._UtilService.saveFileDialog()
    }

    handleBlur() {
        // this._FiltersService.blur()
    }

    handleGrayscale() {
        debugger
        let imageData = this._ImageService.getImageData()
        this.saveModifiedImage(this._FiltersService.grayscale(imageData))
    }

    handleInvert() {
        // this._FiltersService.invert()
    }

    saveModifiedImage(modifiedImage) {
        this._ImageService.setImageData(modifiedImage)
        this._ImageService.setModifiedImageObject(modifiedImage)
    }
}