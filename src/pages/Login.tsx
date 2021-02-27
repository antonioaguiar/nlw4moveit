import styles from '../styles/pages/Login.module.css';

export function Login() {
    return (
        <div className={styles.LoginContainer}>
            <div>
                MoveIt
            </div>
            <p>Bem-vindo</p>
            <div>
                <div>
                    <img src="http://github.com/favicon.ico" alt="" className="src" />
                </div>
                <div>
                    Faça login com seu Gitbub para começar
                </div>

            </div>
            <div>
                <input type="text" value="" placeholder="Digite seu username" />
            </div>
        </div>
    )
}