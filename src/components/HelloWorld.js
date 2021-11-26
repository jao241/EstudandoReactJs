import PropTypes from "prop-types";

HelloWorld.propTypes = {
    nome: PropTypes.string.isRequired
}

HelloWorld.defaultProps = {
    nome: "Sem nome definido"
}

export default function HelloWorld({nome}){
    return(
        <div>
            <h2>Hello world</h2>
            <p>Primeiro projeto em React Js.</p>
            <p>Olá, {nome}</p>
        </div>
    );
};