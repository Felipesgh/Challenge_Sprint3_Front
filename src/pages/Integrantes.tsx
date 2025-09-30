import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ArthurImg from '../assets/Arthur.jpg'
import FelipeImg from '../assets/Felipe.png'

type Member = { 
  id: string
  name: string
  rm: string
  turma: string
  img: string
  github?: string
  linkedin?: string
}

export default function Integrantes(){
  const [members, setMembers] = useState<Member[]>([])

  useEffect(()=>{
    setMembers([
      {
        id:'1',
        name:'Felipe Garcia',
        rm:'',
        turma:'',
        img: FelipeImg,
        github: 'https://github.com/felipe',
        linkedin: 'https://linkedin.com/in/felipe'
      },
      {
        id:'2',
        name:'Arthur Manso',
        rm:'',
        turma:'',
        img: ArthurImg,
        github: 'https://github.com/arthur',
        linkedin: 'https://linkedin.com/in/arthur'
      }
    ])
  },[])

  return (
    <section className="max-w-4xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">Integrantes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {members.map(m => (
          <article key={m.id} className="card text-center p-4 shadow-lg rounded-xl">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-3">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-semibold">{m.name}</h3>
            <p>{m.rm}</p>
            <p>{m.turma}</p>
            <Link to={`/integrante/${m.id}`} className="inline-block mt-3 text-primary underline">
              Ver perfil
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
