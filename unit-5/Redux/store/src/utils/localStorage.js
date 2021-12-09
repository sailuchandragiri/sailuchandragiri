/**
 * 
 * @param {String} key
 * return json.parse(data) 
 */

 export function loadData(key){
    try{
        const data = localStorage.getItem(key);
        return JSON.parse(data);
    }catch(e){
        return undefined;   
    }
}

/**
 * 
 * @param {String} key 
 * @param {any data} data 
 * @returns 
 */
export function saveData(key, data){
    try{
        localStorage.setItem(key,JSON.stringify(data));
    }catch (err) {
        return undefined;
    }
}