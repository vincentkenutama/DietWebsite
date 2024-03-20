import ProfileDisplay from "../ProfileDisplay";
import { getActiveUser } from "../../Script/Scripts";

export default function DashboardNavbar()

{
    return(
        <div className="dashboard-navbar">
            <ProfileDisplay username={getActiveUser()}/>
        </div>
    );
}