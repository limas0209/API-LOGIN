import {useState} from 'react'


function Login() {

    //Hook-usestatte
    const [usuario, setUsuario]= useState({
        usuario:"",
        senha:"",
    })

    //função handleChange

    const handleChange = async (e)=>{
    const {name, value}=e.target;
    setUsuario({...usuario,[name]:value})
    } 

    //função handlesubmit

    const handleSubmit =async (e)=>{
        e.preventDefault();

        let user;

        try{
            const response = await fetch(" http://localhost:5000/usuarios");
            if(response.ok){
                const users = await response.json();

                for (let i=0; i < users.length;i++){
                    const use =users[i];
                    user = use;

                    if(use.usuario==usuario.usuario  && use.senha == usuario.senha){
                        user =use;
                        break;
                    }
                 
                }
            }
            if(user){
                sessionStorage.setItem('usuarioLogado', JSON.stringify(user));

                setTimeout(()=>{
                    window.location='/';
                },3000)
            }else{
                alert("Usuario/senha Invalidos")
                    setUsuario({
                        usuario:"",
                        senha:"",
                    })
                    window.location ="/login";
                }
            }
        catch(error){
            console.log(error)
        }
    }


  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='idUsuario'>Usuario:</label>
            <input
            type="text"
            name="usuario"
            value={usuario.usuario}
            placeholder="Digite seu usuário"
            onChange={handleChange}
            />
        </div>

        <div>
            <label htmlFor='idSenha'>Senha:</label>
            <input
            type="password"
            name="senha"
            value={usuario.senha}
            placeholder="Digite sua senha"
            onChange={handleChange}
            />
        </div>
        <button type="submit">Logar</button>

    </form>
  
    </>
  )
}

export default Login
