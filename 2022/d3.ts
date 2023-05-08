import path from "path"
import fs from "fs"

const input = fs.readFileSync(path.join(__dirname, './Inputs/d3.txt'), 'utf-8');

//*PART 1
const priority: string[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
let priority_tracker_part_1: number = 0

const inputArray: string[] = input.split("\n")
for (const backpacks in inputArray) {
    //splitting the string into 2 halves
    const curr: string = inputArray[backpacks]
    const firstHalf: string = curr.substring(0, curr.length / 2)
    const secondHalf: string = curr.substring(curr.length / 2)
    const commonLetters: string[] = []
    for (const letter in firstHalf.split("")) {
        if (secondHalf.includes(firstHalf[letter])) {
            if (!(commonLetters.indexOf(firstHalf[letter]) > -1)) commonLetters.push(firstHalf[letter])
        }
    }
    for (const commonLetter in commonLetters) {
        priority_tracker_part_1 = (priority.indexOf(commonLetters[commonLetter]) + 1) + priority_tracker_part_1
    }
}
console.log("part 1:", priority_tracker_part_1)

//*PART 2

//split into their groups
const groupedInputArray: string[][] = []
let tempArray: string[] = []
for (const line in inputArray) {
    tempArray.push(inputArray[line].trim())
    if (tempArray.length >= 3) {
        groupedInputArray.push(tempArray)
        tempArray = []
    }
}
let priority_tracker_part_2: number = 0
for (const group in groupedInputArray) {
    const commonLetters: string[] = []
    const temp_assignment = groupedInputArray[group]
    for (const letter in temp_assignment[0].split("")) {
        if (temp_assignment[1].includes(temp_assignment[0][letter]) && temp_assignment[2].includes(temp_assignment[0][letter])) {
            if (!(commonLetters.indexOf(temp_assignment[0][letter]) > -1)) commonLetters.push(temp_assignment[0][letter])
        }
    }
    for (const commonLetter in commonLetters) {
        priority_tracker_part_2 = (priority.indexOf(commonLetters[commonLetter]) + 1) + priority_tracker_part_2
    }
}
console.log("part 2:", priority_tracker_part_2)