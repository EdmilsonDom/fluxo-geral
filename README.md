# Fluxo Geral - Sistema de Gerenciamento de Veículos

[![Build and Deploy](https://github.com/EdmilsonDom/fluxo-geral/actions/workflows/npm-grunt.yml/badge.svg)](https://github.com/EdmilsonDom/fluxo-geral/actions/workflows/npm-grunt.yml)
[![CodeQL](https://github.com/EdmilsonDom/fluxo-geral/actions/workflows/codeql.yml/badge.svg)](https://github.com/EdmilsonDom/fluxo-geral/actions/workflows/codeql.yml)

Sistema web para gerenciamento de veículos com interface moderna e funcionalidades completas.

## 🚀 Funcionalidades

- Gerenciamento de veículos
- Interface responsiva
- Sistema de navegação intuitivo
- Processamento de pagamentos (PaymentList.jsx)
- Efeitos sonoros e visuais

## 🛠️ Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Build Tool**: Grunt.js
- **Frameworks**: React (componentes específicos)
- **CI/CD**: GitHub Actions
- **Deploy**: GitHub Pages

## 📋 Pré-requisitos

- Node.js (>= 18.0.0)
- npm (>= 8.0.0)

## 🔧 Instalação e Execução

### Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/EdmilsonDom/fluxo-geral.git
cd fluxo-geral

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

### Produção

```bash
# Build do projeto
npm run build

# Servir arquivos de produção
npm run serve
```

## 📁 Estrutura do Projeto

```
fluxo-geral/
├── src/
│   ├── index.html          # Página principal
│   ├── estilo.css         # Estilos principais
│   ├── mov.js             # Lógica de movimento/animações
│   └── PaymentList.jsx    # Componente de pagamentos
├── gerenciamento_veiculos/ # Módulo de gerenciamento
├── imagem/                # Recursos de imagem
├── som/                   # Arquivos de áudio
├── dist/                  # Arquivos compilados
├── .github/
│   └── workflows/         # CI/CD workflows
├── package.json           # Dependências e scripts
├── Gruntfile.js          # Configuração do Grunt
└── .gitignore            # Arquivos ignorados pelo Git
```

## 🚀 Scripts Disponíveis

- `npm start` - Inicia servidor de desenvolvimento na porta 3000
- `npm run dev` - Inicia servidor com abertura automática do browser
- `npm run build` - Gera build de produção
- `npm run lint` - Executa verificação de código
- `npm run format` - Formata código automaticamente
- `npm run serve` - Serve arquivos de produção

## 🔄 Fluxo de Desenvolvimento

### 1. Criação de Branch
```bash
git checkout -b feature/nova-funcionalidade
```

### 2. Desenvolvimento
- Faça suas alterações
- Execute `npm run lint` para verificar código
- Execute `npm run build` para testar build

### 3. Commit e Push
```bash
git add .
git commit -m "feat: descrição da nova funcionalidade"
git push origin feature/nova-funcionalidade
```

### 4. Pull Request
- Abra PR para a branch `main`
- Aguarde aprovação nos checks automáticos
- Merge após revisão

## 🧪 CI/CD

O projeto utiliza GitHub Actions para:

- **Build automático** em Node.js 18.x, 20.x, 22.x
- **Verificação de código** (linting e formatação)
- **Deploy automático** para GitHub Pages
- **Análise de segurança** com CodeQL

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**EdmilsonDom**

- GitHub: [@EdmilsonDom](https://github.com/EdmilsonDom)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
