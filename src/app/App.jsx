import './App.css';
import Layout from '../layout/layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const context = import.meta.globEager('/src/pages/**/*.jsx');

const pages = Object.keys(context).map(path => {
  const Component = context[path].default;
  const routePath = path
    .replace('/src/pages', '')  // Remove a pasta base
    .replace('.jsx', '')        // Remove a extensão
    .toLowerCase();             // Deixa a rota em minúsculas

  // Verifica e ajusta a rota para a página inicial
  const adjustedPath = routePath === '/homepage' ? '/' : routePath;

  console.log(`Página carregada: ${adjustedPath}, Componente: ${Component ? Component.name : 'Não encontrado'}`);  // Log da rota gerada

  return { path: adjustedPath, Component };
});

// Função para adicionar os logs de navegação
 

const App = () => {
  return (
    <Router> 
      <Layout>
        <Routes>
          {pages.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
