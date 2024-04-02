import { dayKeyValue, monthKeyValue } from "./Variables";
import axios from "axios";

const clearCookies = () => {
    document.cookie = 'username=;'
    document.cookie = 'password=' 
}


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


function formatDate(inputDate) {
    const [datePart] = inputDate.split(' '); 
    const dateParts = datePart.split('/');

    console.log(datePart, dateParts)
    
    const year = dateParts[2];
    const month = String(dateParts[0]).padStart(2, '1');
    const day = String(dateParts[1]).padStart(2, '0');
    
    const formattedDate = `${year}-${month}-${day}`;
    
    return formattedDate;
}

async function getUserInformation()
{
    const username = getCookiesValues('username')
    // console.log(username)
    const response = await axios.get(`https://localhost:7115/User/GetUser?username=${username}`)
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
    
    // console.log(cookie)
    return pairs[keyIndex + 1]

}

function stepOverDay(numDay){
    return new Date().valueOf() + numDay * 1000 * 3600 * 24 
}

function getActiveUser()
{
    const res = getCookiesValues('username') 
    return (res == 'password') ? null : res;
}



function getTodayDay()
{        
    return dayKeyValue[new Date().getDay()];
}

function getTodayMonth(){
    return monthKeyValue[new Date().getMonth()];
}

function mouseOverPointer(e){
    e.target.style.cursor = 'pointer'
}

function getTodayString()
{
    const today = new Date()
    const stringify = {
        year : today.getFullYear(),
        month : (today.getMonth() + 1 < 10) ? `0${today.getMonth() + 1}` : `${today.getMonth() + 1}`,
        date : (today.getDate() < 10) ? `0${today.getDate()}` : `${today.getDate()}`  
    }


    return `${stringify.year}-${stringify.month}-${stringify.date}`

}


function getAge(birthDate)
{
    const Today = new Date()
    const BirthDate = new Date(`${birthDate}`)

    return new Date(new Date(Today - BirthDate)).getFullYear() - 1970;
}

export {clearCookies, 
        getCookiesValues, 
        getActiveUser, 
        getTodayDay, 
        getTodayMonth, 
        stepOverDay, 
        getUserInformation,
        mouseOverPointer,
        getAge, 
        getTodayString,
        formatDate
    };
