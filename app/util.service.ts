import { Injectable } from "@angular/core"
import { readFile } from "fs"
import { Image } from "Image"
export const { remote } = electron
export const { dialog } = remote

@Injectable()
export class UtilService {

    openFileDialog() {
        return new Promise((resolve, reject) => {
            dialog.showOpenDialog((path) => {
                if(path === undefined) {
                    console.log("No file selected.")
                    resolve()
                } else {
                    let imagePath = path[0]
                    this.loadImageFromFile(imagePath)
                        .then(result => {
                            resolve(result)
                        })
                        .catch(err => {
                            reject(err)
                        })
                }
            })
        })
    }

    loadImageFromFile(path) {
        return new Promise((resolve, reject) => {
            readFile(path, (err, data) => {
                if(err) {
                    reject(err)
                } else {
                    debugger;

                    console.log("Loaded image data from disk.")
                    resolve(data)
                }
            })
        })
    }

    convertImageToObject(data) {
        debugger;
        let image = new Image()
        image.src = "data:image/png;base64," + window.btoa(String.fromCharCode.apply(null, new Uint8Array(data)))
        return image
    }

    saveFileDialog() {
        alert("Saved new image to disk.")
    }
}