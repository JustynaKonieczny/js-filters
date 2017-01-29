import { Component } from "@angular/core"
import { UtilService } from "../util.service"
import { ImageService } from "../image.service"

@Component({
    moduleId: module.id,
    selector: "app-header",
    templateUrl: "./header.component.html",
})

export class Header {
    constructor(private _UtilService: UtilService, private _ImageService: ImageService) {}

    handleOpenFile() {
        this._UtilService.openFileDialog()
            .then(data => {
                if(data) {
                    this._ImageService.setImageData(data)
                    let imgObj = this._UtilService.convertImageToObject(data)
                    this._ImageService.setImageObject(imgObj)
                }
            })
            .catch(err => {
                console.log("Error loading image data from file.", err)
            })
    }

    handleSaveFile() {
        this._UtilService.saveFileDialog()
    }
}