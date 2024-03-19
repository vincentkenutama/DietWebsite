import backbutton from '../../assets/back-button.svg'
import nextbutton from '../../assets/next-button.svg'


export default function DatePickerNavigation({nav_back, nav_next})
{

    return (
        <div className="datepicker-nav">
            <img    src={backbutton} alt="" 
                    className='back-button'
                    onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                    onClick={nav_back}/>
                    
            <img    src={nextbutton} 
                    alt="" 
                    onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                    onClick={nav_next}/>
        </div>
    );
}