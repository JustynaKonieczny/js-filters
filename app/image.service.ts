import { Injectable } from "@angular/core"
import { Subject } from "rxjs/Subject"
import { Observable } from "rxjs/Observable"

@Injectable()
export class ImageService {
    private _image: any
    private _imageData: Uint8Array
    private _subject: Subject<any> = new Subject<any>()
    private _imageObservable: Observable<any> = this._subject.asObservable()

    setImageData(data) {
        this._imageData = new Uint8Array(data)
    }

    getImageData() {
        return this._imageData
    }

    setImageObject(img: any) {
        this._image = img
        this._subject.next(this._image)
    }

    getImageObject(): Observable<any> {
        return this._imageObservable;
    }
}