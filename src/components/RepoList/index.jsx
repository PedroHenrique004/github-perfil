import { useEffect, useState } from "react";
import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then (res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson);
            },2000)
        })
    },[nomeUsuario])

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
                <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li key={repositorio.id} className={styles.listItem}>
                        <div className={styles.itemName}>
                            <b >Nome: </b> {repositorio.name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b> {repositorio.language}
                        </div>
                        <div >
                            <a target="_blank" href={repositorio.html_url} className={styles.itemLink}>Visitar no GitHub</a>
                        </div>     
                    </li>
                ))}
            </ul>
            )}
            
        </div>
    )
}

export default ReposList;
