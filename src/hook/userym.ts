import {useState, useEffect} from 'react'
import type { RYM } from '../type'

const useRYM = () => {
    const [rym, setRYM] = useState<RYM[]>([])

    const traerRYM = async() => {
        try{
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json()

            const listadoReal = data.results.map((c: any) => ({
                id: c.id,
                name: c.name,
                url: c.image,
                especie: c.species,
                tipo: c.type,
                estado: c.status,
            }))
            setRYM(listadoReal)
        }
        catch(error){
            console.error("Error al traer los datos de la API Rick and Morty", error)
        }
    }

    useEffect(() => {
        traerRYM()
    }, [])

    return rym
}

export default useRYM;