import '../Styles/LoginPage.css'

export default function SignInNotify({status = 'ok'}) {

    const state = {
        ok: 'hidden',
        password: 'notify-password',
        username: 'notify-username',
        both: 'notify-both',
        empty: 'notify-empty'
    }

    const message = {
        username: 'Invalid username or does not exist',
        password: 'Invalid password',
        both: 'Username or password does not exists',
        empty: 'Please fill the blank field'
    }


    return (
        <p className={state[status]}>{message[status]}</p>
    );
}