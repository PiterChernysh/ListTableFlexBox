import dataRatesJson from "../data/dataRates.json";
export const getRates = new Promise((resilve, reject)=>{
    resilve(dataRatesJson);
})
 