
import '@styles/UsersStyles.css'

export default function UserDisplayNavigation({show = true, items = []})
{
    const visibility = {
        true : 'visible',
        false : 'hidden'
    }

    const display = {
        true : 'block',
        false : 'none'
    }



    return(
        <div    style={{visibility: visibility[show], display: display[show]}}
                className={`user-profile-navigation ${visibility[show]}`}>
                
                {items.map((item, index) => {
                    return (
                        <div    onClick={item.nav}
                                onMouseOver={(e) => e.target.style.cursor = 'pointer'}
                                className="user-profile-nav-item"
                                key={index}>
                            
                            {item.title}
                
                        </div>)
                })}
        </div>
    );
}