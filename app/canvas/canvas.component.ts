import { Component, ViewChild, ElementRef } from "@angular/core"
import { ImageService } from "../image.service"

@Component({
    moduleId: module.id,
    selector: "app-canvas",
    templateUrl: "./canvas.component.html"
})

export class Canvas {
    private _width: number
    private _height: number
    private _hasImage: boolean
    private _ctx: CanvasRenderingContext2D

    @ViewChild("filtersCanvas") canvas: ElementRef

    constructor(private _ImageService: ImageService) {
        this._hasImage = false
    }

    ngAfterViewInit() {
        this.getOriginalImageUpdates()
        this._ctx = this.canvas.nativeElement.getContext("2d")
    }

    getOriginalImageUpdates() {
        this._ImageService.getImageObject().subscribe(img => {
            this.setCanvasImage(img)
        }, err => {
            console.log("An error occured while getting image subscription update.", err)
        }, () => {
            console.log("Got image subscription update.")
        })
    }

    setCanvasImage(img) {
        debugger;
        this._hasImage = true
        // this._width = img.width
        // this._height = img.height
        // this._ctx = this.canvas.nativeElement.getContext("2d")
        this.updateCanvasSize(img.width, img.height)
        this._ctx.drawImage(img, 0, 0, img.width, img.height)
    }

    updateCanvasSize(width, height) {
        this._ctx.canvas.width = width
        this._ctx.canvas.height = height
    }
}