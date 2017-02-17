import { Component, ViewChild, ElementRef } from "@angular/core"
import { ImageService } from "../image.service"

@Component({
    moduleId: module.id,
    selector: "app-canvas",
    templateUrl: "./canvas.component.html"
})

export class Canvas {
    private _hasImage: boolean
    private _ctx: CanvasRenderingContext2D

    @ViewChild("filtersCanvas") canvas: ElementRef

    constructor(private _ImageService: ImageService) {
        this._hasImage = false
    }

    ngAfterViewInit() {
        this.getModifiedImageUpdates()
        this._ctx = this.canvas.nativeElement.getContext("2d")
    }

    getModifiedImageUpdates() {
        this._ImageService.getModifiedImageObject().subscribe(img => {
            this.setCanvasImage(img)
        }, err => {
            console.log("An error occured while getting image subscription update.", err)
        }, () => {
            console.log("Got image subscription update.")
        })
    }

    setCanvasImage(img) {
        if(!this._hasImage) {
            this._hasImage = true
        }
        this.updateCanvasSize(img.width, img.height)
        //@todo: refactor condition to something logical AND to always use putImageData
        if(typeof img === "object" && !img.hasOwnProperty("data")) {
            this._ctx.drawImage(img, 0, 0)
        } else {
            this._ctx.putImageData(img, 0, 0)
        }
    }

    updateCanvasSize(width, height) {
        this._ctx.canvas.width = width
        this._ctx.canvas.height = height
    }
}