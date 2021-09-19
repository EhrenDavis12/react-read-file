// import _ from 'lodash';

const cities = ['New York', 'Paris', 'Rome', 'Phoenix']
const fares = [
    0, 100, 150, 250,
    30, 0, 300, 200,
    200, 100, 0, 50,
    50, 100, 300, 0
]

export function getCities(){
    return cities;
}

export function getFaresList(){
    let fares_list = [];
    for (let i =0; i<fares.length; i+=cities.length){
        fares_list.push(fares.slice(i, i+cities.length));
    }
    return fares_list;
};

export function setTravelFares({fromCity, toCity, setDirectFare, setLowestFare, setRout}) {
    const faresList = getFaresList();
    let lowestFare = getDirectTravelFare(fromCity, toCity);
    let bestRout = [fromCity, toCity];

    setDirectFare(lowestFare);

    getLowestFare(fromCity, toCity, 0, [], cities);
    setLowestFare(lowestFare);
    setRout(bestRout);

    function getDirectTravelFare(fromCity, toCity) {
        const fromIndex = cities.indexOf(fromCity);
        const toIndex = cities.indexOf(toCity);
        return faresList[fromIndex][toIndex];
    };

    function getLowestFare(fromCity, toCity, currentRoutFare, citiesVisited, citiesLeftInRout){
        let re_citiesVisited = [...citiesVisited, fromCity];
        let re_citiesLeftInRout = [...citiesLeftInRout];
        re_citiesLeftInRout.splice(citiesLeftInRout.indexOf(fromCity), 1);
        if (fromCity === toCity) {
            lowestFare = currentRoutFare;
            bestRout = re_citiesVisited;
            return true;
        }
        re_citiesLeftInRout.forEach(city => {
            let nextFare = getDirectTravelFare(fromCity, city) + currentRoutFare;
            if (nextFare < lowestFare) {
                let result = getLowestFare(city, toCity, nextFare, re_citiesVisited, re_citiesLeftInRout)
                if (result) return result;
            }
        });
        return false;
    };
};
