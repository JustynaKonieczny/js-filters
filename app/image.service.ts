import { Injectable } from "@angular/core"
import { Subject } from "rxjs/Subject"
import { Observable } from "rxjs/Observable"

@Injectable()
export class ImageService {
    private _image: any
    private _imageData: Uint8Array
    private _originalSubject: Subject<any> = new Subject<any>()
    private _modifiedSubject: Subject<any> = new Subject<any>()

    setImage(img) {
        this._image = img
    }

    getImage() {
        return this._image
    }

    setImageData(data) {
        //keeps image data (BUFFER! not UInt8Arr, at least for now, should be changed in next build)
        this._imageData = data
    }

    getImageData() {
        debugger;
        return this._imageData
    }

    setOriginalImageObject(img: any) {
        this._image = img
        this._originalSubject.next(this._image)
        this.setModifiedImageObject(img)
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