import { useEffect, useState } from "react";
import { getTodayDay, getTodayMonth, stepOverDay} from "../../Script/Scripts";
import { monthKeyValue } from "../../Script/Variables";
import { useSearchParams } from "react-router-dom";

export default function DateMonthYear({offset = 0})
{
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        getMonth()
        getYear()
    }, [offset])

    const getMonth = () => {
        setMonth(monthKeyValue[new Date(stepOverDay(offset)).getMonth()]);
    }

    const getYear = () => {
        setYear(new Date(stepOverDay(offset)).getFullYear())
    }


    return(
        <span className='datepicker-header'>{month} {year}</span>
    );
}