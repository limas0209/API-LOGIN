
import {useState } from 'react'
import {Link} from 'react-router-dom'


function Nav() {

    const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))


    const handleLogout =()=>{
        sessionStorage.removeItem("usuarioLogado")
        window.location.reload();
    }


  return (
    <>
        <div style={userLogado == null ? {display:"none"}: {display:"block"}}>
        <p>{userLogado !=null ? `Usuario logado:${userLogado.usuario}`:""}</p>
        <button onClick={handleLogout}>Logout</button>

    </div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    </>
  )
}

export default Nav

