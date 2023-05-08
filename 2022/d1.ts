import path from "path"
import fs from "fs"

const input = fs.readFileSync(path.join(__dirname, './Inputs/d1.txt'), 'utf-8');

const inputArray = input.split("\n")

const mainArray: string[][] = []
let tempArray: string[] = []
for (const entry in inputArray) {
    if (inputArray[entry] == "\r") {
        mainArray.push(tempArray)
        tempArray = []
    } else {
        tempArray.push(inputArray[entry])
    }
}

for (const elf in mainArray) {//remove the '\r's in the strings
    for (const food in mainArray[elf]) {
        mainArray[elf][food] = mainArray[elf][food].trim()
    }
}

let highest: number[] = [0, 0, 0]

for (const elf in mainArray) {
    highest = highest.sort((n1, n2) => n1 - n2);
    let tracker = 0
    for (const food in mainArray[elf]) {
        tracker += parseInt(mainArray[elf][food])
    }
    if (tracker > highest[0]) {
        highest[0] = tracker
    }
}

const sum: number = highest[0] + highest[1] + highest[2]

console.log("part 1:", highest[highest.length - 1])
console.log("part 2:", sum)