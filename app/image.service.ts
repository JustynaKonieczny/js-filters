import { Injectable } from "@angular/core"
import { Subject } from "rxjs/Subject"
import { Observable } from "rxjs/Observable"

@Injectable()
export class ImageService {
    private _image: any
    private _imageData: ImageData
    private _imageType: any
    private _canvasElement: any
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

    setCanvasElement(canvas) {
        this._canvasElement = canvas
    }

    getCanvasElement() {
        return this._canvasElement
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