import { Component, ViewChild, ElementRef } from "@angular/core"

@Component({
    moduleId: module.id,
    selector: "app-canvas",
    templateUrl: "./canvas.component.html",
    //@TODO: use sass + separate file for styles
    styles: [
        `canvas {
            border: 1px solid black; 
        }`
    ]
})

export class Canvas {
    @ViewChild("filtersCanvas") canvasRef: ElementRef
    private canvas: any
    private _width: number
    private _height: number
    private imageData: Uint8Array

    ngAfterViewInit() {
        this.canvas = this.canvasRef.nativeElement
        this.canvas.width = window.innerWidth/2
        this.canvas.height = window.innerHeight/2
    }

    setImageData(data) {
        this.imageData = data
    }

    getImageData() {
        return this.imageData
    }
}