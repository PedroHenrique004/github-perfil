import styles from './inputs.module.css'

const Input = ({usuario}) => {

    return (
        <div className="forumalrio">
            <h1 className={styles.titulo}>Digite seu nome De usuário:</h1>
            <input type="text" onBlur={(e) => usuario(e.target.value)} className={styles.inputUsuario}/>
        </div>
    )


}

export default Input;