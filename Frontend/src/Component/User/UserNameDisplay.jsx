import '@styles/UsersStyles.css'

export default function UserNameDisplay({username = 'undefined'})
{
    return(
        <div className="user-username-container">
            <span className="username-display">{`@${username}`}</span>
        </div>
    );
}