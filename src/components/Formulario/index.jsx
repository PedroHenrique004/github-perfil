import { useState, useEffect } from "react";

const Formulario = () => {
    
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');
    const numeros = [1,2,3,4,5]

    useEffect(() => {
        console.log("o componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }

    }, []) // apenas para quando ele for inicializado e  o return para quando for finalizado



    useEffect(() => {
        console.log("o nome mudou")
    }, [nome]) 

    useEffect(() => {
        console.log("A materia A mudou para " + materiaA)
    }, [materiaA, materiaB])

    const alteraNome = (evento) => {
       // console.log(evento.target.value)
       // setNome(evento.target.value);
       
       setNome(estadoAnterior=> {
        
            console.log(estadoAnterior);
            return evento.target.value
       }) 
    }
 

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, foi reprovado</p>
            )    
        }
    }

    

    return (
        <form>

            {[1,2,3,4,5].map(item => (
                <>
                    <li key={item}>{item}</li>
                </>
            ))}
            {numeros.map(item => (
                    <li key={item}>{item}</li>
            ))}

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}  />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}  />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;