import DisplayName from "../Component/DisplayName";
import ProfileDisplay from "../Component/ProfileDisplay";
import DatePicker from "../Component/Dashboard/DatePicker";
import {getActiveUser, getCookiesValues} from "../Script/Scripts";
import '../Styles/DashboardStyles.css'

export default function Dashboard()
{
    return(
        <div className="dashboard-container">
            <ProfileDisplay username={getActiveUser()}/>
            <DatePicker/>
        </div>
    );
}