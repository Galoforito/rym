import './App.css'
import { Card } from './components'
import {useRYM} from './hook'

function App() {
  const rym = useRYM()
  return (
    <>
      {
        rym.map((c) => (
          <Card
          key={c.id}
          name={c.name}
          url={c.url}
          especie={c.especie}
          tipo={c.tipo? c.tipo : "Desconocido"}
          estado={c.estado} />
        ))
      }
    </>
  )
}

export default App
