import { useState } from 'react'
import Perfil from './components/Perfil';
import ReposList from './components/RepoList';
import Input from './components/Campos/Input';
import './global.css';


function App() {
  const [nomeUsuario , setNomeUsuario] = useState('')

  return (
    <>
        <Input usuario={setNomeUsuario}/>

        {nomeUsuario.length > 1 && (
        <>
        <Perfil nomeUsuario={nomeUsuario}  />  
        <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
