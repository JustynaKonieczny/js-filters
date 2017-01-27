import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent }   from './app.component'
import { Canvas }   from './canvas/canvas.component'
import { Header } from "./header/header.component"

@NgModule({
    imports:        [ BrowserModule ],
    declarations:   [ AppComponent, Canvas, Header ],
    bootstrap:      [ AppComponent ]
})

export class AppModule {}
