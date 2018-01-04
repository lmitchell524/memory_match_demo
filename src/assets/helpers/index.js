export function doubleArray(array, times = 2){

    const newArray = [];

    for(let count = 0; count < times; count++){
        for(let index = 0; index < array.length; index++){
            let jsonString = JSON.stringify(array[index]);
            let newObj = JSON.parse(jsonString);

            newArray.push(newObj);
        }
    }
    return newArray;
}

export function shuffleArray(arr){
    for(let index = 0; index < arr.length; index++){
        const randomIndex = Math.floor(Math.random() * arr.length);

        const temp = arr[index];
        arr[index] = arr[randomIndex];
        arr[randomIndex] = temp;
    }

    return arr;
}