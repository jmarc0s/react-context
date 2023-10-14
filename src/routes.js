import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsuarioProvider } from 'common/context/Usuario';
import { CarrinhoProvider } from 'common/context/Carrinho';


function Router() {


    return (
        <BrowserRouter>
            <UsuarioProvider >
                <Routes>

                    <Route exact path="/" element={<Login />} />


                    <Route path="/feira" element={
                        <CarrinhoProvider>
                        <Feira />
                        </CarrinhoProvider>
                    } />


                    <Route path="/carrinho" element={<Carrinho />} />


                </Routes>
            </UsuarioProvider>
        </BrowserRouter>
    )
}

export default Router;