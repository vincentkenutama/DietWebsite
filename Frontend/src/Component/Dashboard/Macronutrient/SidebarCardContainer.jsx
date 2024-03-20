import SidebarCards from "./SiderbarCards"

export default function SidebarCardContainer({title = '-', data = []}) {
    console.log(data)

    return (
        <div>
            <span className="card-container-header">{title}</span>
            {data.map((item, index) => (
                <SidebarCards
                    key={index}
                    icon={item.icon} 
                    title={item.title} 
                    value={item.value} 
                    color={item.color}
                    links={item.links}
                />
            ))}
        </div>
    );
}
