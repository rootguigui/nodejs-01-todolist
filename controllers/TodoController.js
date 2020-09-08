const { Todo } = require("../models/Todo");

class TodoController {
  async index(req, res) {
    try {
      const { page, limit } = req.query;

      const todoPaginate = {
        total: 0,
        page: 1,
        limit: 10,
        pages: 1
      };

      const todos = await Todo.paginate({}, { page, limit: Number(limit) }, function (err, result) {
        todoPaginate['total'] = result.total;
        todoPaginate['page'] = result.page;
        todoPaginate['limit'] = result.limit;
        todoPaginate['pages'] = result.pages;
      });

      return res.status(200).send({ error: false, message: `Foram encontradas ${todoPaginate['total']}.`, todos });
    }
    catch(err) { return res.status(400).send({error: true, message: 'Erro ao consultar as tarefas' })}
  }

  async new(req, res) {
    const { name, description, isActive } = req.body;

    try {
      const todo = await Todo.create({
        name, description, isActive
      });

      return res.status(200).send({ error: false, message: 'Tarefa cadastrada com sucesso!', todo });
    }
    catch(err) { return res.status(400).send({error: true, message: 'Erro ao tentar cadastrar uma nova tarefa' })}
  }

  async update(req, res) {
    const id = req.params.id;
    const { name, description, isActive } = req.body;

    try {
      const todo = await Todo.findByIdAndUpdate(id, {
        name, description, isActive
      });

      return res.status(200).send({ error: false, message: 'Tarefa atualizada com sucesso!', todo });
    }
    catch(err) { return res.status(400).send({error: true, message: 'Erro ao tentar atualizar a tarefa' })}
  }

  async delete(req, res) {
    const _id = req.params.id;

    try {
      const existsTodo = await Todo.findOne({ _id });

      if (existsTodo == null)
        return res.status(404).send({ error: true, message: 'Tarefa não encontrada!' });

      const todo = await Todo.findByIdAndDelete({ _id });

      return res.status(200).send({ error: false, message: 'Tarefa removida com sucesso!', todo });
    }
    catch(err) { return res.status(400).send({error: true, message: 'Erro ao tentar remover a tarefa' })} 
  }

  async getById(req, res) {
    const _id = req.params.id;

    try {
      const existsTodo = await Todo.findOne({ _id });

      if (existsTodo == null)
        return res.status(404).send({ error: true, message: 'Essa tarefa não existe!' });

      const todo = await Todo.findOne({ _id });

      return res.status(200).send({ error: false, todo });
    }
    catch(err) { return res.status(400).send({error: true, message: 'Erro ao tentar encontrar a tarefa' })} 
  }
}

module.exports = new TodoController();