import { useEffect, useState } from "react"
import { getUserFullName, getActiveUser, getUserInformation} from "../../Script/Scripts"


export default function UserGreeting()
{   
    const [userFullName, setUserFullName] = useState('')

    useEffect(() => {
        getFullName()
    }, [])

    const getFullName = async () => {
        const name = await getUserFullName()
        setUserFullName(name)
    }

    return(
        <div className="dashboard-greeting">
           <span className="greet-user">Selamat pagi, {userFullName}</span>
           <span className="greet-dummy-text">Mari memulai hidup sehat</span>
        </div>
    )
}