import path from "path"
import fs from "fs"

const input = fs.readFileSync(path.join(__dirname, './Inputs/d4.txt'), 'utf-8');

const inputArray: string[] = input.split("\n")
const pairsArray: number[][][] = []
//parse input
for (const pairs in inputArray) {
    const pair = inputArray[pairs]
    const tempPairArray = []
    const sepPairs = pair.split(",")
    for (const elf in sepPairs) {
        const nums = sepPairs[elf].split("-")
        const tempArray = []
        for (let i = parseInt(nums[0]); i <= parseInt(nums[1]); i++) {
            tempArray.push(i)
        }
        tempPairArray.push(tempArray)
    }
    pairsArray.push(tempPairArray)

}
//*PART 1

//check for complete overlaps
let completeOverlapCounter = 0
for (const pairs in pairsArray) {
    let completeOverlap = true
    const currPair = pairsArray[pairs]
    if (currPair[0].length > currPair[1].length) {
        for (const loc in currPair[1]) {
            if (currPair[0].indexOf(currPair[1][loc]) === -1) {
                completeOverlap = false;
            }
        }
    } else {
        for (const loc in currPair[0]) {
            if (currPair[1].indexOf(currPair[0][loc]) === -1) {
                completeOverlap = false;
            }
        }
    }
    if (completeOverlap) completeOverlapCounter++;
}

//*PART 2

//check for any overlap
let overlapCounter = 0
for (const pairs in pairsArray) {
    let overlap = false
    for (const loc in pairsArray[pairs][0]) {
        if (pairsArray[pairs][1].indexOf(pairsArray[pairs][0][loc]) > -1) {
            overlap = true
        }
    }
    if (overlap) overlapCounter++;
}

//*RESULT
console.log("Part 1:", completeOverlapCounter)
console.log("Part 2:", overlapCounter)


