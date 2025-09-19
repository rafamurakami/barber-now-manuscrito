import styles from './Input.module.css'

function Password(){
    return(
        <input type="password" placeholder="SENHA" className={styles['inputField']}/>
    )
}

export default Password