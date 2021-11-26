import Button from "./Button";

function clicar(){
    console.log("Click");
}

export default function Eventos(){
    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Button text="Primeiro evento" event={clicar}/>
        </>
    );
}