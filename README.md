<h1>Simples Todo List feito em nodejs</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=nodejs&message=framework&color=blue&style=for-the-badge&logo=NODEJS"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

> Status do Projeto: :heavy_check_mark: concluido

### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Rotas](#rotas)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

... 

## Descrição do projeto

<p align="justify">
  Simples "Todo List" feito em NodeJS, MongoDB, Express para Praticar. 
</p>

## Funcionalidades

:heavy_check_mark: Lista todos TODOS e Listar TODO específico.  

:heavy_check_mark: Adicionar Novo TODO. 

:heavy_check_mark: Atualizar TODO.  

:heavy_check_mark: Deletar TODO. 


# Rotas

<p align="justify">
  :memo: Listar todos os TODOS - GET - urlPath/api - query options - ?page=1 & limit=10
  * page - número da Pagina
  * limit - limite de todos listado por pagina
</p>

<p align="justify">
  :memo: Novo TODO - POST - urlPath/api
  * body - { name, description, isActive }
  * required - name, description
  * default - isActive é 'false', se não passar valor
</p>

<p align="justify">
  :memo:  Update TODO - PUT - urlPath/api/:id
  * body - { name, description, isActive }
  * required - name, description, isActive
  * params url - passar o id na url
</p>

<p align="justify">
  :memo: Delete TODO - DELETE - urlPath/api/:id
  * params url - passar o id na url
</p>

<p align="justify">
  :memo: Encontrar TODO pelo ID - GET - urlPath/api/:id
  * params url - passar o id na url
</p>

## Como rodar os testes

Coloque um passo a passo para executar os testes

<p align="justify">Produção</p>

```
$ npm start
```

<p align="justify">Desenvolvimento</p>

```
$ npm run dev
```

## Licença 

The [MIT License]() (MIT)

Copyright :copyright: Ano - Titulo do Projeto