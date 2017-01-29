import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent }   from './app.component'
import { UtilService } from "./util.service";
import { ImageService } from "./image.service";
import { Canvas }   from './canvas/canvas.component'
import { Header } from "./header/header.component"
import { Image } from "./image/image.component"

@NgModule({
    imports:        [ BrowserModule ],
    providers:      [ UtilService, ImageService ],
    declarations:   [ AppComponent, Canvas, Header, Image ],
    bootstrap:      [ AppComponent ]
})

export class AppModule {}
