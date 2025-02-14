# Projeto Template React 3.0 - Integração com Firebase

Este repositório é um template para projetos utilizando **Vite**, **React** e **Firebase**. Ele possui uma estrutura pré-configurada para facilitar o desenvolvimento de aplicações modernas com React.

## 📦 Instalação

Para rodar o projeto localmente, siga os seguintes passos:

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Instale as dependências:
   ```sh
   yarn install
   ```
   ou
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

O projeto estará rodando em `http://localhost:5173/` (ou outra porta disponível).

---

## 🚀 Automatização de Criação de Componentes

Este template inclui um script chamado **createComponent.js**, que facilita a criação de novas páginas e sua adição nas rotas automaticamente.

### Como Usar o Script

Para criar um novo componente de página, execute o seguinte comando:

```sh
node createComponent.js <NomeDaPagina>
```

🔹 **Substitua `<NomeDaPagina>` pelo nome da página que deseja criar.**

O script irá:
- Criar um novo componente de página com um template padrão.
- Adicionar automaticamente essa página ao sistema de rotas do projeto.

Isso reduz o trabalho manual e garante uma padronização na estrutura das páginas.

---

## 🔥 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Ferramenta de build rápida para projetos frontend
- [React](https://react.dev/) - Biblioteca para construção de interfaces
- [Firebase](https://firebase.google.com/) - Plataforma de backend como serviço (BaaS)
