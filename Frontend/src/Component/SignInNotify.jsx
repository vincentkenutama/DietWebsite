import '../Styles/LoginPage.css'

export default function SignInNotify({status = 'ok', msg = ''}) {

    const state = {
        ok: 'hidden',
        password: 'notify-password',
        username: 'notify-username',
        both: 'notify-both',
        empty: 'notify-empty',
        notify: 'notify',
        invalid: 'notify-red'
    }

    const message = {
        username: 'Invalid username or does not exist',
        password: 'Invalid password',
        both: 'Username or password does not exists',
        empty: 'Please fill the blank field'
    }


    return (
        <>
            {console.log(status, msg)}
            <p className={(status.toLowerCase() in state) ? state[status] : state.both}>{(status.toLowerCase() in message) ? message[status] : (status.toLocaleLowerCase() == 'notify' || 'invalid') ?  '' : status} {msg}</p>
        
        </>
    );
}