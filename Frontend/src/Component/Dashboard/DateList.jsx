import { useEffect, useState } from "react";
import { shortDayKeyValue } from "../../Script/Variables";
import { stepOverDay } from "../../Script/Scripts";

export default function DateList({index = 0, setNavigate}){

    const [dateList, setDateList] = useState([]);
    const [dayList, setDayList] = useState([])
    
    
    useEffect(() => {
        getCalendar();
        
    }, [index])

    const getCalendar = () => {
        // [-2, -1, 0, 1 , 2]
        const offset = -2;
        let listOfDay = []
        let listOfDate = []

        for(let i = 0; i < 5; i++)
        {
            listOfDay.push(shortDayKeyValue[new Date(stepOverDay(offset + i + index)).getDay()]);
            listOfDate.push(new Date(stepOverDay(offset + i + index)).getDate())
        }
        
        setDateList(listOfDate);
        setDayList(listOfDay);
    }

    const dateOnClickEvent = (i) => {
        const offset = -2;
        setNavigate(i + offset);
    }

    return (
        <div className="datepicker-list-date">
            {dateList.map((date, index) => (
                <div    key={date} 
                        className={`datepicker-date ${(index == 2) ? 'datepicker-center' : '' }`}
                        onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                        onClick={() => dateOnClickEvent(index)}>
                            
                    <div className={`datepicker-day ${(index == 2) ? 'datepicker-center' : '' }`}>
                        {dayList[index]}
                    </div>
                    <div className={`datepicker-day-num ${(index == 2) ? 'datepicker-center' : '' }`}>
                        {date}
                    </div>
                </div>
            ))}
        </div>
    );
}   
