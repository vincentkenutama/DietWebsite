import '../../Styles/DashboardStyles.css'
import { getTodayDay, getTodayMonth, stepOverDay} from '../../Script/Scripts';
import DateMonthYear from './DateMonthYear';
import DatePickerNavigation from './DatePickerNavigation';
import DateList from './DateList';
import { useEffect, useState } from 'react';

export default function DatePicker(){

    const [index, setIndex] = useState(0)

    useEffect(() => {
        
    })
    const navigateNextDay = () => {
        setIndex(index + 1);
    }

    const navigateBackDay = () => {
        setIndex(index - 1);
    }

    const navigateToDay = (offset) => {
        setIndex(index + offset);
    }

    return(
        <div>
            <div className="datepicker-container">
                <DateMonthYear offset={index}/>
                <DatePickerNavigation nav_back={navigateBackDay} nav_next={navigateNextDay}/>
                <DateList index={index} setNavigate={navigateToDay}/>
            </div>
           
        </div>
    );
}