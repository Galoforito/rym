import "./card.css"

interface Props{
    name: string,
    url: string,
    especie: string,
    tipo: string,
    estado: string
}

function Card({name, url, estado, especie, tipo}: Props){
    return(
        <>
        <div className="card">
            <img src={url} alt={name} />
            <div className="datos">
                <p>
                    <h2>Nombre: {name}</h2>
                    Especie: {especie}
                    <br/>
                    Tipo: {tipo}
                    <br/>
                    Estado: {estado}
                </p>
            </div>
        </div>
        </>
    )
}

export default Card;