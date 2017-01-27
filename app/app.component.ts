import { Component } from "@angular/core"
import { Canvas } from "./canvas/canvas.component"
import { Header } from "./header/header.component"

@Component({
    moduleId: module.id,
    selector: "app-filters",
    templateUrl: "./app.component.html",
    entryComponents: [ Canvas, Header ]
})

export class AppComponent {}
