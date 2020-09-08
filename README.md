# Simples Todo List feito em nodejs

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