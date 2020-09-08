<h1>Simples Todo List feito em nodejs</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</p>

### Simples "Todo List" feito em NodeJS, MongoDB, Express para Praticar

# Rotas

### Listar todos os TODOS - GET - urlPath/api - query options - ?page=1 & limit=10
  * page - número da Pagina
  * limit - limite de todos listado por pagina

### Novo TODO - POST - urlPath/api
  * body - { name, description, isActive }
  * required - name, description
  * default - isActive é 'false', se não passar valor

### Update TODO - PUT - urlPath/api/:id
  * body - { name, description, isActive }
  * required - name, description, isActive
  * params url - passar o id na url

### Delete TODO - DELETE - urlPath/api/:id
  * params url - passar o id na url

### Encontrar TODO pelo ID - GET - urlPath/api/:id
  * params url - passar o id na url