import { Component } from "@angular/core"
import { UtilService } from "../util.service"
import { ImageService } from "../image.service"
import { FiltersService } from "../filters.service";
let jpegjs = require("node_modules/jpeg-js")

@Component({
    moduleId: module.id,
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class Header {
    private _hasImage: boolean = false;

    constructor(private _UtilService: UtilService, private _ImageService: ImageService, private _FiltersService: FiltersService) {}

    ngAfterViewInit() {
        this.getModifiedImageUpdates()
    }

    getModifiedImageUpdates() {
        this._ImageService.getModifiedImageObject().subscribe(() => {
            this._hasImage = true
        }, err => {
            console.log("An error occured while getting image subscription update.", err)
        }, () => {
            console.log("Got image subscription update.")
        })
    }

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
        let imageData = this._ImageService.getImageData()
        this.saveModifiedImage(this._FiltersService.grayscale(imageData))
    }

    handleInvert() {
        let imageData = this._ImageService.getImageData()
        this.saveModifiedImage(this._FiltersService.invert(imageData))
    }

    handleSepia() {
        let imageData = this._ImageService.getImageData()
        this.saveModifiedImage(this._FiltersService.sepia(imageData))
    }

    saveModifiedImage(modifiedImage) {
        this._ImageService.setImageData(modifiedImage)
        this._ImageService.setModifiedImageObject(modifiedImage)
    }
}