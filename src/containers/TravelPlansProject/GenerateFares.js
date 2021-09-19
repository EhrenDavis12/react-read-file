const seed = [50,100,150,200,400,800];

function randomArrays(length, values=seed) {
    let result = [];
    for (let i = length; i > 0; --i) result.push(values[Math.floor(Math.random() * values.length)]);
    return result;
};

function zeroOutSameCiteFare(fares, intervalToBlank){
    for (let i =0; i <= fares.length; i+=intervalToBlank+1){
        fares[i] = 0;
    }
    return fares
};

export function getRandomFares(cities){
    let faresList = randomArrays(cities.length * 4);
    return zeroOutSameCiteFare(faresList, cities.length)
};

export function setRandomFares(cities, setFares){
    let results = getRandomFares(cities);
    setFares(results);
};

