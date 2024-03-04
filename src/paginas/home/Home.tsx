
import homeLogo from '../../assets/cthulhu.gif';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import bemVindo from '../../assets/sejam-bem-vindes-02-03-2024 (1).gif';


function Home() {
  return (
    <>
      <div className="bg-slate-950 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
          <img src={bemVindo} alt="" className='w-2/3' />
            <p className='text-xl'>Aqui é um espaço seguro para falarmos de jogos e gatinhos!</p>

            <div className="flex justify-around gap-4">
            <ModalPostagem />
              <button className='border rounded px-4 py-2 bg-white hover:bg-slate-100 hover:text-slate-500 text-black'>Ver Postagens</button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3' />

          </div>
        </div>
      </div>
      <ListaPostagens />
    </>
  );
}

export default Home;