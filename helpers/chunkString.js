export function returnChunksArray(str, chunkSize) {
    var arr = [];
    while(str !== '') {
        arr.push(str.slice(0, chunkSize));
        str = str.slice(chunkSize);
    }
    return arr;
}