const CategoryTodo = require('../models').category_todo;

module.exports = {
    list(req, res) {
        return CategoryTodo
            .findAll({
                order: [
                    ['createdAt', 'DESC']
                ],
            })
            .then((category_todo) => {
                res.status(200).send(category_todo);
            })
            .catch((error) => {
                res.status(400).send(category_todo);
            });
    },

    getById(req, res) {
        return CategoryTodo
            .findByPk(req.params.id, {
                include: ['todo']
            })
            .then((category_todo) => {
                if (!category_todo) {
                    return res.status(404).send({
                        message: 'Category todo not found!'
                    });
                }
                return res.status(200).send(category_todo);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    add(req, res) {
        return CategoryTodo
            .create({
                name: req.body.name,
                slug: req.body.slug,
                description: req.body.description
            })
            .then((category_todo) => {
                res.status(201).send(category_todo);
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    },

    update(req, res) {
        return CategoryTodo
            .findByPk(req.params.id)
            .then((category_todo) => {
                if (!category_todo) {
                    return res.status(404).send({
                        message: 'Category todo not found!'
                    });
                }
                return category_todo
                    .update({
                        name: req.body.name || category_todo.name,
                        slug: req.body.slug || category_todo.slug,
                        description: req.body.description || category_todo.description,
                    })
                    .then(() => {
                        res.status(200).send(category_todo);
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
        return CategoryTodo
            .findByPk(req.params.id)
            .then((category_todo) => {
                if (!category_todo) {
                    return res.status(400).send({
                        message: 'Category todo not found!',
                    });
                }
                return category_todo
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