import { useEffect, useState } from "react"
import { getUserFullName, getActiveUser, getUserInformation} from "../../Script/Scripts"


export default function UserGreeting()
{   
    const [userFullName, setUserFullName] = useState('')
    const [greetingSelector, setGreetingSelector] = useState('none')

    const greetingMessage = {
        'pagi' : 'Selamat pagi',
        'siang' : 'Selamat siang',
        'sore' : 'Selamat sore',
        'malam' : 'Selamat malam',
        'none': 'Halo'
    }

    const greetUser = () => {
        const hour = new Date().getHours()

        switch(true){
            case hour > 19:
                setGreetingSelector('malam')
                break;
            case hour > 15:
                setGreetingSelector('sore')
                break;
            case hour > 11:
                setGreetingSelector('siang')
                break;
            case hour > 0:
                setGreetingSelector('pagi')
                break;
            default:
                setGreetingSelector('none')
                break;
        }
    }

    useEffect(() => {
        getFullName()
        greetUser()
        
    }, [])

    const getFullName = async () => {
        const name = await getUserFullName()
        setUserFullName(name)
    }

    return(
        <div className="dashboard-greeting">
           <span className="greet-user">{greetingMessage[greetingSelector]}, {userFullName}</span>
           <span className="greet-dummy-text">Mari memulai hidup sehat</span>
        </div>
    )
}