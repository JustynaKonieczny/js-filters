import { Component } from "@angular/core"
import { Canvas } from "./canvas/canvas.component"
import { Header } from "./header/header.component"
import { Image } from "./image/image.component"

@Component({
    moduleId: module.id,
    selector: "app-filters",
    templateUrl: "./app.component.html",
    entryComponents: [ Canvas, Header, Image ],
    styleUrls: ["./app.component.css"]
})

export class AppComponent {}
