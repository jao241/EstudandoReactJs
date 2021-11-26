export default function Lista({ itens }){
    return(
        <>
            <h2>Lista de itens:</h2>
            {
                itens.map((item)=>{
                    return <p>{item}</p>
                })
            }
        </>
    );
}