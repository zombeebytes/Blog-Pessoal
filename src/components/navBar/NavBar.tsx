import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'


function NavBar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-slate-900 text-slate-200 flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase font-serif'>Blog Pessoal</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline font-serif'>Postagens</Link>
              <Link to='/temas' className='hover:underline font-serif'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline font-serif'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline font-serif'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline font-serif'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default NavBar;