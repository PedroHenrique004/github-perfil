import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario}) => {

    return (
        <div className="container">
            <header className={styles.header}>
                <a href={`https://github.com/${nomeUsuario}`} target="_blank">
                    <img src={`https://github.com/${nomeUsuario}.png`} className={styles.avatar}/>
                </a>
                <a href={`https://github.com/${nomeUsuario}`} target="_blank" className={styles.LinkName}>
                    <h1 className={styles.name}>
                        {nomeUsuario}
                    </h1>
                </a>        
            </header>   
        </div>
    )
}

export default Perfil;