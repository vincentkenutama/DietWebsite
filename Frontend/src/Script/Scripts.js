import { dayKeyValue, monthKeyValue } from "./Variables";
import axios from "axios";


const getUserNamePicture = async () => {
    await axios.get(`https://localhost:7115/User/GetUser?username=${username}`)
    .then((response) => {
        const data = response.data;
        
        setFullName(data.Nama)
        setImage(data.Picture)
    }
    ).catch(() => {

    })    
}

async function getUserInformation()
{
    const response = await axios.get(`https://localhost:7115/User/GetUser?username=vincentkenutama`)
    // console.log(response);
    return response;
    
}

export async function getUserFullName(params)
{
    const data = await getUserInformation();
    // console.log(data.data.Nama)
    return await data.data.Nama;
}

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

export {getCookiesValues, getActiveUser, getTodayDay, getTodayMonth, stepOverDay, getUserInformation};
