const Todo = require('../models').todo;

module.exports = {
    list(req, res) {
        return Todo
            .findAll({
                include: ['user', 'category_todo'],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((todos) => {
                res.status(200).send(todos);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    getById(req, res) {
        return Todo
            .findByPk(req.params.id, {
                include: ['user', 'category_todo']
            })
            .then((todo) => {
                if (!todo) {
                    return res.status(404).send({
                        message: 'Todo not found!',
                    });
                }
                return res.status(200).send(todo);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    add(req, res) {
        return Todo
            .create({
                user_id: req.body.user_id,
                category_id: req.body.category_id,
                title: req.body.title,
                description: req.body.description,
            })
            .then((user) => {
                res.status(201).send(user);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    update(req, res) {
        return Todo
            .findByPk(req.params.id)
            .then((todo) => {
                if (!todo) {
                    return res.status(404).send({
                        message: 'Todo not found!',
                    });
                }
                return todo
                    .update({
                        user_id: req.body.user_id || todo.user_id,
                        category_id: req.body.category_id || todo.category_id,
                        title: req.body.title || todo.title,
                        description: req.body.description || todo.description,
                    })
                    .then(() => {
                        res.status(200).send(todo);
                    })
                    .catch((error) => {
                        res.status(400).send(error);
                    });
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    delete(req, res) {
        return Todo
            .findByPk(req.params.id)
            .then((todo) => {
                if (!todo) {
                    return res.status(404).send({
                        message: 'Todo not found!',
                    });
                }
                return todo
                    .destroy()
                    .then(() => {
                        res.status(204).send();
                    })
                    .catch((error) => {
                        res.status(400).send(error);
                    });
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};