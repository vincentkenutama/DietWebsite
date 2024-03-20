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

    const navigateToThisDay = () => {
        setIndex(0)
    }

    const navigateToDay = (offset) => {
        setIndex(index + offset);
    }

    return(
        <div>
            <div className="datepicker-container">
                <div className='datepicker-navigator'>
                    <DateMonthYear offset={index} navigate={navigateToThisDay}/>
                    <DatePickerNavigation nav_back={navigateBackDay} nav_next={navigateNextDay}/>
                </div>
                <DateList index={index} setNavigate={navigateToDay}/>
            </div>
           
        </div>
    );
}