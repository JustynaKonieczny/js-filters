import { Component } from "@angular/core"
import { ImageService } from "../image.service"

@Component({
    moduleId: module.id,
    selector: "app-image",
    templateUrl: "./image.component.html",
    styleUrls: ["./image.component.css"]
})

export class Image {
    private _imgSrc: string

    constructor(private _ImageService: ImageService) {}

    ngOnInit() {
        this.getImageUpdate()
    }

    getImageUpdate() {
        this._ImageService.getOriginalImageObject().subscribe(img => {
            this.setImageSource(img.src)
        }, err => {
            console.log("An error occured while getting image subscription update.", err)
        }, () => {
            console.log("Got image subscription update.")
        })
    }

    setImageSource(src) {
        this._imgSrc = src
    }

    getImageSource(): string {
        return this._imgSrc
    }
}