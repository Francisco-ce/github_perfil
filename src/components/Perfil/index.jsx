import styles from './Perfil.module.css'

const Perfil = ({nomeUsuario}) => {

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt='foto do Github'></img>
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil

    // const usuario = {
    //     nome: 'Francisco',
    //     avatar: 'https://github.com/Francisco-ce.png'
    // }

/* {JSON.stringify(props)} */

// const {endereco, nome} = props