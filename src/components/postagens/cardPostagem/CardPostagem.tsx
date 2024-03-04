
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'


interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
    <div className='border-dashed rounded border-black border flex flex-col justify-between'>
      <div>
        <div className="flex w-full bg-sky-950 py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase text-white'>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-bold uppercase'>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p className='font-extrabold'><br/>Tema: {post.tema?.descricao}</p>
          <p className='font-semibold text-1xl'><br/>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='w-full bg-teal-700 hover:bg-teal-600 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-teal-800 hover:bg-teal-600 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem;