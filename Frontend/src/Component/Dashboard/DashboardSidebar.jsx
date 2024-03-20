import DatePicker from "./DatePicker";
import ProfileDisplay from "../ProfileDisplay";
import SidebarCards from "./Macronutrient/SiderbarCards";
import SidebarCardContainer from "./Macronutrient/SidebarCardContainer";
import { getActiveUser } from "../../Script/Scripts";


export default function DashboardSidebar()
{
    const coba = () => {
        console.log('hello')
    }
    const dataLaporanMakan = [{
        icon: 'pagi',
        title: 'Pagi',
        value: '🔥800kkal',
        color: '#F09A4D',
        links: coba
    },
    {
        icon: 'siang',
        title: 'Siang',
        value: '🔥500kkal',
        color: 'wheat'
    },
    {
        icon: 'malam',
        title: 'Malam',
        value: '🔥1000kkal',
        color: '#AF98C7'
    }]

    const dataTeman = [
        {
            icon: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/jotaro-blue-sky.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5',
            title: 'Joko Subroto',
            value: '+20kg',
            color: ''

        }
    ]

    return(
        <div className="dashboard-sidebar">
            <ProfileDisplay username={getActiveUser()}/>
            <DatePicker/>
            <SidebarCardContainer title="Laporan Makan" data={dataLaporanMakan}/>
            <SidebarCardContainer title="Teman" data={dataTeman}/>
        </div>
    );
}