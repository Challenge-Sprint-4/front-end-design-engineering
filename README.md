# 🏥 Prontuário HC

Plataforma de gestão de saúde desenvolvida para o Challenge do Hospital das Clinícas. O sistema permite o gerenciamento de pacientes, profissionais, agendamentos e consultas, contando com um sistema de autenticação robusto para Pacientes e Profissionais.

---

## 🚀 Tecnologias Usadas

### Frontend

* **React** (Vite + TypeScript)
* **React Router DOM** para gerenciamento de rotas
* **React Context API** para gerenciamento de estado global (Autenticação)
* **Axios** para chamadas de API
* **Tailwind CSS** para estilização responsiva e componentização de UI
* **ESLint** para padronização de código

### Backend (Inferido)

* **Java (Quarkus)** para a API REST (conforme `localhost:8080` no `api.ts`)
* **JPA / Hibernate** para persistência de dados
* **PostgreSQL** (ou outro banco de dados relacional)

### Infraestrutura & Deploy

* **Vercel / Netlify** (Sugerido para deploy do frontend)
* **Ambiente de Desenvolvimento:** `localhost:8080` (Backend) e `localhost:5173` (Frontend)

---

## 👥 Integrantes

| Nome | RM |
| :--- | :--- |
| Henrique Martins | RM563620 |
| Henrique Teixeira | RM563088 |

*1TDSPF - Análise e Desenvolvimento de Sistemas*

---

## 💻 Execução

Para rodar este projeto localmente, você precisará de dois terminais: um para o **Backend (Java/Quarkus)** e um para o **Frontend (React)**.

### Backend (Java/Quarkus)

Presume-se que o backend já esteja clonado e configurado.

1.  Navegue até o diretório raiz do projeto backend.
2.  Execute o Quarkus em modo de desenvolvimento:

    ```bash
    ./mvnw quarkus:dev
    ```
    *ou (se não usar o wrapper)*
    ```bash
    mvn quarkus:dev
    ```
3.  O servidor backend deve estar rodando em `http://localhost:8080`.

### Frontend (React)

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Navegue até o diretório do frontend:
    ```bash
    cd seu-repositorio
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute o servidor de desenvolvimento (Vite):
    ```bash
    npm run dev
    ```
5.  Abra `http://localhost:5173` (ou a porta indicada no terminal) no seu navegador.

---

## 📂 Estrutura de Diretórios (Frontend)
A estrutura de pastas do projeto React está organizada da seguinte forma, visando a separação de responsabilidades:
```bash
seu-repositorio/
├── public/
│   └── (ícones, fontes, etc.)
├── src/
│   ├── assets/           # Imagens estáticas (logos, etc.)
│   ├── components/       # Componentes reutilizáveis (ex: Button, Input, Modal)
│   ├── contexts/         # Contextos globais (ex: AuthContext.tsx)
│   ├── pages/            # Componentes de página (rotas)
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Cadastro.tsx
│   │   ├── Pacientes.tsx
│   │   └── (outras páginas: Profissionais, Agendamentos...)
│   ├── routes/           # (Opcional: Arquivo de configuração de rotas)
│   ├── services/         # Configuração de APIs (ex: api.ts)
│   ├── App.tsx           # Componente principal com definição de rotas
│   ├── index.css         # Estilos globais (Tailwind)
│   └── main.tsx          # Ponto de entrada da aplicação
├── .eslintrc.cjs
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---
## 🔗 Links do Projeto (Exemplo)
🌐 Aplicação Online (Deploy): 
Repositório: https://github.com/Challenge-Sprint-4/front-end-design-engineering.git
