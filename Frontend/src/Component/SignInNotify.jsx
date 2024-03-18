import '../Styles/LoginPage.css'

export default function SignInNotify({status = 'ok', msg = ''}) {

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
        <p className={(status in state) ? state[status] : state.both}>{(status in message) ? message[status] : status} {msg}</p>
    );
}