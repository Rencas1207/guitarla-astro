import { useState } from "react"

export default function ComponentReact() {
   const [client, setClient] = useState('Rencas');
   console.log('Desde cliente y servidor');
   return (
      <div>{client}</div>
   )
}
