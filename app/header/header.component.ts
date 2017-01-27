import { Component } from "@angular/core"
import { UtilService } from "../util.service"

@Component({
    moduleId: module.id,
    selector: "app-header",
    templateUrl: "./header.component.html",
    providers: [ UtilService ]
})

export class Header {
    constructor(private UtilService: UtilService) {}

    handleOpenFile() {
        this.UtilService.openFileDialog()
            .then(data => {
                //@TODO: send an event to Canvas cmp and setImageData
                // this.setImageData(data)
            })
            .catch(err => {
                console.log("Error loading image data from file.", err)
            })
    }

    handleSaveFile() {
        this.UtilService.saveFileDialog()
    }
}