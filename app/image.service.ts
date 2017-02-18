import { Injectable } from "@angular/core"
import { Subject } from "rxjs/Subject"
import { Observable } from "rxjs/Observable"
let jpegjs = require("node_modules/jpeg-js")

@Injectable()
export class ImageService {
    private _image: any
    private _imageData: Uint8Array
    private _imageType: any
    private _originalSubject: Subject<any> = new Subject<any>()
    private _modifiedSubject: Subject<any> = new Subject<any>()

    setImage(img) {
        this._image = img
    }

    getImage() {
        return this._image
    }

    setImageData(data) {
        this._imageData = data
    }

    getImageData() {
        return this._imageData
    }

    setImageType(type) {
        this._imageType = type
    }

    getImageType() {
        return this._imageType
    }

    setOriginalImageObject(img: any) {
        this._image = img
        this._originalSubject.next(this._image)
        //@TODO: add other file types decoding
        let decodedData = this.getImageData().data
        let originalImageData = new ImageData(decodedData, img.width, img.height)
        this.setModifiedImageObject(originalImageData)
    }

    getOriginalImageObject(): Observable<any> {
        return this._originalSubject.asObservable()
    }

    setModifiedImageObject(img: any) {
        this._image = img
        this._modifiedSubject.next(this._image)
    }

    getModifiedImageObject(): Observable<any> {
        return this._modifiedSubject.asObservable()
    }
}