import { dayKeyValue, monthKeyValue } from "./Variables";

function getCookiesValues(key)
{
    const cookie = document.cookie
    const pairs = cookie.split(/[=;\s]+/)
    const keyIndex = pairs.findIndex((pairs) => pairs == key)

    if(keyIndex == -1) return;

    return pairs[keyIndex + 1]

}

function stepOverDay(numDay){
    return new Date().valueOf() + numDay * 1000 * 3600 * 24 
}

function getActiveUser()
{
    return getCookiesValues('username')
}



function getTodayDay()
{        
    return dayKeyValue[new Date().getDay()];
}

function getTodayMonth(){
    return monthKeyValue[new Date().getMonth()];
}

export {getCookiesValues, getActiveUser, getTodayDay, getTodayMonth, stepOverDay};
