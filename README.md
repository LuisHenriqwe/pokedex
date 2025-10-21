# 📘 Pokédex - Desafio DIO

Este projeto foi desenvolvido como parte do **Desafio de Projeto da DIO (Digital Innovation One)**, com o objetivo de criar uma **Pokédex interativa** utilizando **HTML, CSS e JavaScript**, consumindo dados diretamente da **PokeAPI**.  

A Pokédex permite visualizar uma lista de Pokémon e acessar informações detalhadas de cada um, como tipo, habilidades e atributos.

---

## 🚀 Tecnologias Utilizadas

- **HTML5**  
- **CSS3**  
- **JavaScript (ES6+)**  
- **PokeAPI** (https://pokeapi.co/)

---

## 💡 Funcionalidades

✅ Listagem dos Pokémon com nome, número e tipo  
✅ Cores dinâmicas de acordo com o tipo do Pokémon  
✅ Página de detalhes ao clicar em um Pokémon  
✅ Exibição de informações detalhadas como:
  - HP, Ataque, Defesa, Velocidade, Experiência, Altura e Peso  
✅ Layout totalmente responsivo  
✅ Botão de voltar à página principal  

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, aprendi a:  
- Consumir APIs públicas com `fetch()`  
- Manipular o **DOM** de forma dinâmica com JavaScript  
- Criar **componentes reutilizáveis** e funções modulares  
- Passar informações entre páginas usando **URL parameters**  
- Trabalhar com **layouts dinâmicos** e estilos condicionais baseados nos dados da API  

---

## 🗂️ Estrutura do Projeto

```
📦 Pokedex
├── index.html
├── layoutPokemon.html
├── src/
│ ├── css/
│ │ ├── reset.css
│ │ ├── main.css
│ │ └── layoutPokemon.css
│ ├── scripts/
│ │ ├── main.js
│ │ ├── poke-api.js
│ │ ├── layoutPokemon.js
│ │ └── pokemon-model.js
│ └── images/
│ └── (imagens)
```
---

## 📥 Como Clonar e Executar o Projeto

1. Clone este repositório ou faça o download do ZIP:

```bash
git clone https://github.com/LuisHenriqwe/pokedex.git
```
2. Abra o projeto em um editor de código (recomendado: VS Code).

3. Abra o arquivo index.html no navegador.

Observação: Como o projeto utiliza fetch() para consumir dados da PokeAPI, é recomendado usar um servidor local para evitar problemas de CORS.
Você pode usar o Live Server do VS Code:

 3.1 Instale a extensão Live Server.

 3.2 Clique com o botão direito em index.html e selecione "Open with Live Server".

 3.3 O navegador abrirá a página em um endereço local, geralmente http://127.0.0.1:5500/.

4. Navegar pelos Pokémon na página inicial e clicar em qualquer um para abrir a página de detalhes (layoutPokemon.html) com todas as informações do Pokémon.
 ⚠️ É necessário ter internet ativa, pois o projeto consome dados diretamente da PokeAPI.
