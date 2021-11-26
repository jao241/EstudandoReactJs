import {useState} from "react";

export default function Form(){
    const [campoInput, setCampoInput] = useState();

    function exibirMensagem(e){
        e.preventDefault();
        console.log(campoInput);
        console.log("Enviado!");
    }
    
    return(
        <>
            <h2>Meu cadastro:</h2>
            <form onSubmit={exibirMensagem}>
                <label htmlFor="campoInput">Digite algo: </label>
                <input type="text" id="campoInput" onChange={(e)=>{
                    setCampoInput(e.target.value);
                }}/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}