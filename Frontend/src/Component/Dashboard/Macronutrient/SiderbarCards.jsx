import morning from '../../../assets/morning-sunrise.svg'
import noon from '../../../assets/noon.svg'
import moon from '../../../assets/moon.svg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SidebarCards({icon = 'default', title, color, value, links})
{

    const [cardColor, setCardColor] = useState('#F2D985')
    const icons = {
        'pagi' : morning,
        'siang' : noon,
        'malam' : moon,
        'default' : morning
    }

    const icon_available = (icon in icons) ? true : false;
    const navigate = useNavigate()

    return(
        <div    className="sidebar-cards" 
                onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                onClick={links}
                >
                <img    src={(icon_available) ? icons[icon] : icon} 
                        alt="" 
                        className="sidebar-cards-icon"
                        style={{backgroundColor: color, 
                                width: (icon_available) ? '30px' : '55px',
                                height: (icon_available) ? '30px' : '55px',
                                padding: (icon_available) ? '0.8em' : 0}}
                        />
                <span className='sidebar-cards-title'>{title}</span>
                <span className='sidebar-cards-value'>{value}</span>

        </div>
    );
}