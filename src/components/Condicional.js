import { useState } from "react";

export default function Condicional(){
    const [ email, setEmail ] = useState()
    const [ userEmail, setUserEmail ] = useState()


    function removerEmail(){
        setUserEmail("");
    }

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..."
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            </form>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail} </p>
                        <button onClick={removerEmail}>Limpar e-mail</button>
                    </div>
                )}
        </div>
    );
}