import { useEffect, useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o tempo mudou não é mesmo?')
    }, [nome]) //vai retormar a mudança apenas quando o nome for alterado//

    useEffect(() => {
        console.log('Houve mudança na '+ materiaA)
    }, [materiaA, materiaB, materiaC])

    useEffect(() => {
        console.log('COmponente inicializou')
    }, []) //informa quando o componente inicializa//

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (materiaA == "" || materiaB == "" || materiaC =="") {
            return (
                ""
            )
        } else {
            if (media>=7) {
                return (
                    <p>{nome} foi aprovado</p>
                )
            } else {
                return (
                    <p>{nome} não foi aprovado</p>
                )
            }
        }
    }

    return (
        <form>
            
            <input type="text" placeholder="Digite seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia A" onChange={({target})=>setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota materia B" onChange={evento=>setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia C" onChange={evento=>setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario