import { useContext } from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext';

function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)
  let footerComponent
  let data = new Date().getFullYear()

  if (usuario.token !== '') {
    footerComponent = (
      <>

        <div className="flex justify-center bg-slate-900 text-white ">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Blog Pessoal | Generation Brasil &copy; </p>
            <p className='text-lg'>Acesse nossas redes sociais:</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={50} weight='fill' />
              <InstagramLogo size={50} weight='fill' />
              <FacebookLogo size={50} weight='fill' />
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer;