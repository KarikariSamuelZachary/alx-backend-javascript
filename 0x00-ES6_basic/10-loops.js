export default function appendToEachArrayValue(array, appendstring) {
    const newArray = [];
    for (const value of array) {
        newArray.push(value + appendstring);
    }

    return newArray;
}