# default

## Para Iniciar o projeto execute
Faça o clone e instale as dependencias.

```
# yarn
yarn

# npm
npm install
```

Após instalar as dependencias execute o comando 
```
yarn dev
```
E o projeto estará rodando em localhost:3000

### Sobre o projeto
Foi desenvolvido utilizando Vuejs em sua versão 3 com Vite como tooling, Vuetify para lib de components, no projeto tem configurado recursos como VueRouter 4 e Pinia (porem não foram explorados nesse projeto), os recursos de composition API também foram pouco utilizados pois não se fez necessário adicional tal complexidade a este app. Axios foi utilizado de forma objetiva para consulmir a API de Noticias. 

#### Comportamento

O app conta com um select no inicio onde ao selecionar um pais ira fazer uma requisição trazendo  as notificias do pais selecionado, informações basicas são mostradas em "Cards" (o card mostra sempre a mesma imagem pois a API de noticias não fornece um formato adequeado para exibição.)

