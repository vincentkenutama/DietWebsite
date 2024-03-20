import DatePicker from "./DatePicker";
import ProfileDisplay from "../ProfileDisplay";
import { getActiveUser } from "../../Script/Scripts";


export default function DashboardSidebar()
{
    return(
        <div className="dashboard-sidebar">
            <ProfileDisplay username={getActiveUser()}/>
            <DatePicker/>
        </div>
    );
}