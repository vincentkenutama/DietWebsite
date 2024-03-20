import { useEffect, useState } from "react";
import { getTodayDay, getTodayMonth, stepOverDay} from "../../Script/Scripts";
import { monthKeyValue } from "../../Script/Variables";
import { useSearchParams } from "react-router-dom";

export default function DateMonthYear({offset = 0, navigate})
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
        <div className='datepicker-header'onMouseOver={(e) => e.target.style.cursor = 'pointer'} onClick={navigate}>{month} {year}</div>
    );
}