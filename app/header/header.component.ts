import { Component } from "@angular/core"
import { UtilService } from "../util.service"
import { ImageService } from "../image.service"
import { FiltersService } from "../filters.service";

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
                    this._ImageService.setImageData(data)
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
        let image = this._ImageService.getImage()
        let data = this._ImageService.getImageData()
        this.saveModifiedImage(this._FiltersService.grayscale(image, data))
    }

    handleInvert() {
        // this._FiltersService.invert()
    }

    saveModifiedImage(modifiedData) {
        this._ImageService.setImageData(modifiedData.pixels)
        this._ImageService.setModifiedImageObject(modifiedData.image)
    }
}