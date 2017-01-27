import { Injectable } from "@angular/core"
import { readFile } from "fs"
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
                    console.log("Loaded image data from disk.", data)
                    resolve(data)
                }
            })
        })
    }

    saveFileDialog() {
        alert("Saved new image to disk.")
    }
}