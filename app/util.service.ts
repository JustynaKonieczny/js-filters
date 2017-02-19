import { Injectable } from "@angular/core"
import { ImageService } from "./image.service"
import { readFile } from "fs"
export const { remote } = electron
export const { dialog } = remote
let filetype = require("node_modules/file-type")

@Injectable()
export class UtilService {

    constructor(private _ImageService: ImageService) {}

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
                    let extension = filetype(data)
                    this._ImageService.setImageType(extension)
                    console.log("Loaded image data from disk.")
                    resolve(data)
                }
            })
        })
    }

    convertImageToObject(data) {
        let image = new Image()
        let uarray = new Uint8Array(data)
        let strings = [], chunksize = 0xffff
        for(let i=0; i*chunksize<uarray.length; i++) {
            strings.push(String.fromCharCode.apply(null, uarray.subarray(i*chunksize, (i+1)*chunksize)))
        }
        image.src = "data:image/png;base64," + window.btoa(strings.join(""))
        return image
    }

    saveFileDialog() {
        alert("Saved new image to disk.")
    }
}