# 🎮 CV RPG - Pedro Nascimento

Currículo interativo com tema de RPG/Ficha de Personagem desenvolvido com **Astro** e **React**.

## 🎯 Sobre o Projeto

Um portfólio/currículo único com visual inspirado em jogos RPG, onde as informações profissionais são apresentadas como uma ficha de personagem com stats, habilidades, missões completadas e conquistas. O projeto utiliza **Astro** para performance otimizada e **React** para componentes interativos.

## ✨ Características

- 🎨 Design temático de RPG com visual de pergaminho
- 📊 Sistema de stats e habilidades com barras de progresso animadas
- 🏆 Seções temáticas (Missões, Conquistas, Formação)
- 🎯 Animações e efeitos interativos com IntersectionObserver
- 📱 Layout responsivo
- 🎭 Ícones Lucide React para uma experiência visual moderna
- ⚡ Performance otimizada com Astro (SSG - Static Site Generation)
- 🔄 Hot Module Replacement (HMR) para desenvolvimento rápido

## 🛠️ Tecnologias Utilizadas

### Core
- **[Astro](https://astro.build/)** - Framework web moderno para sites estáticos
- **[React](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática

### Dependências
- **@astrojs/react** - Integração React com Astro
- **lucide-react** - Ícones modernos e leves
- **React 18** - Biblioteca de UI

### Estilização
- **CSS3** - Estilização e animações customizadas
- **Google Fonts** - Tipografia (Cinzel, MedievalSharp, Press Start 2P)
- **Font Awesome** - Ícones adicionais

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd PROJETO-CV
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o navegador em `http://localhost:####`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Preview da build de produção
- `npm start` - Alias para `npm run dev`

## 📁 Estrutura do Projeto

```
PROJETO-CV/
├── src/
│   ├── components/          # Componentes React
│   │   ├── CharacterCard.tsx      # Card principal do personagem
│   │   ├── InfoCard.tsx           # Card de informações
│   │   ├── SkillsSection.tsx       # Seção de habilidades
│   │   ├── SkillItem.tsx           # Item individual de skill
│   │   ├── BioSection.tsx          # Seção de biografia
│   │   ├── ExperienceSection.tsx   # Seção de experiências
│   │   ├── EducationSection.tsx    # Seção de formação
│   │   ├── CertificatesSection.tsx # Seção de certificados
│   │   └── Footer.tsx              # Rodapé
│   ├── layouts/
│   │   └── BaseLayout.astro        # Layout base
│   ├── pages/
│   │   └── index.astro             # Página principal
│   ├── styles/
│   │   └── global.css              # Estilos globais
│   └── env.d.ts                    # Tipos do Astro
├── public/
│   ├── img/                        # Imagens públicas
│   └── certificados/               # PDFs dos certificados
├── astro.config.mjs                # Configuração do Astro
├── tsconfig.json                   # Configuração do TypeScript
├── package.json                    # Dependências e scripts
└── README.md                       # Este arquivo
```

## 🎮 Seções do CV

- **Character Sheet** - Informações principais do personagem com stats (Força, Defesa, Inteligência, Velocidade)
- **Habilidades Técnicas** - Skills organizadas por categoria (Linguagens, Frameworks, Ferramentas)
- **Biografia** - Sobre o desenvolvedor
- **Missões Completadas** - Experiências profissionais
- **Formação** - Educação acadêmica
- **Conquistas** - Certificados e cursos

## 📝 Personalização

Para personalizar o CV:

1. **Idade**: Edite a data de nascimento em `src/components/CharacterCard.tsx` (linha 10)
2. **Informações Pessoais**: Atualize os dados em `src/components/InfoCard.tsx`
3. **Skills**: Ajuste os níveis de habilidade em `src/components/SkillsSection.tsx`
4. **Experiências**: Edite o array `experiences` em `src/components/ExperienceSection.tsx`
5. **Formação**: Edite o array `educations` em `src/components/EducationSection.tsx`
6. **Certificados**: Edite o array `certificates` em `src/components/CertificatesSection.tsx`
7. **Cores**: Modifique as variáveis CSS em `src/styles/global.css`

## 🏗️ Build e Deploy

### Build de Produção

```bash
npm run build
```

A build será gerada na pasta `dist/` pronta para deploy.

### Deploy

O projeto está configurado para output estático e pode ser deployado em:

- **Vercel** (recomendado para Astro)
- **Netlify**
- **GitHub Pages**
- Qualquer servidor estático

## 🎨 Componentes React

Os componentes React utilizam `client:load` para hidratação no lado do cliente:

- `CharacterCard` - Calcula idade dinamicamente e exibe stats
- `SkillsSection` - Anima barras de progresso com IntersectionObserver

Os demais componentes são renderizados estaticamente pelo Astro para melhor performance.

## 🔧 Configuração

### Astro Config (`astro.config.mjs`)

- Integração React habilitada
- Output estático configurado

### TypeScript Config (`tsconfig.json`)

- Estende configuração strict do Astro
- JSX configurado para React

## 👨‍💻 Autor

**Pedro Nascimento**
- Desenvolvedor Full Stack | Java | PL/SQL | React | Vue.js
- [LinkedIn](https://www.linkedin.com/in/pedro-nascimento-125073177/)
- [GitHub](https://github.com/Lemigro)

## 📄 Licença

Este projeto é pessoal e está disponível para uso como referência.

---

Desenvolvido com ❤️ e muito café ☕ usando Astro + React
