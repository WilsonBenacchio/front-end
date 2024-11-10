import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Projetista from './pages/CLIENTE/Projetista/projetista'
import Login from "./pages/login/Login";
import Editar from './pages/inputs_completo/FormPerfil'
import Detalhes from './/components/card-perfil/Detalhes'; // O componente para mostrar os detalhes do item
import Pedidos from './pages/pedidos/pedidos';
import Orcamento from './components/card-perfil/perfil'
import CadastraProjeto from './pages/NovoProjeto/Projeto'
import PerfilProjetista from './pages/perfil-projetista/perfil-projetista';
import Register from './pages/Cadastro/Register'
import PerfilCliente from './pages/CLIENTE/perfil-cliente/perfil-cliente';
import Ajuda from './pages/Ajuda/ajuda';

const API_BASE_URL = 'http://localhost:8080/usuario';


function Nav() {
   return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit" element={<Editar />} />
        <Route path="/detalhes/:indice" element={<Detalhes  />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/orcamento" element={<Orcamento  />} />
        <Route path="/cadastrar_Projeto" element={<CadastraProjeto  />} />
        <Route path="/projetista-perfil" element={<PerfilProjetista />} />
        <Route path="/cliente-perfil"    element={<PerfilCliente />} />
        <Route path="/projetista"        element={<Projetista />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/editar" element={<Editar />} />

        
      </Routes>
    </Router>
   )
}
export default Nav;
