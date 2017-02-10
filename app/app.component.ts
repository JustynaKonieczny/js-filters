import { Component } from "@angular/core"
import { Canvas } from "./canvas/canvas.component"
import { Header } from "./header/header.component"
import { ImageElement } from "./image/imageelement.component"

@Component({
    moduleId: module.id,
    selector: "app-filters",
    templateUrl: "./app.component.html",
    entryComponents: [ Canvas, Header, ImageElement ]
})

export class AppComponent {}
