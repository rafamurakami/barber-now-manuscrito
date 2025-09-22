import styles from './Input.module.css'

function Email() {
    return(
    <input type="email" placeholder="E-MAIL" className={styles['inputField']}/>
    )
}

export default Email