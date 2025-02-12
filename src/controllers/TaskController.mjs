import Task from '../models/Task.mjs';

export default class TaskController {
  static createTask(req, res) {
    res.render('tasks/create');
  }
  static async createTaskSave(req, res) {
    const { title, description } = req.body;

    const task = {
      title,
      description,
      done: false,
    };

    await Task.create(task)
      .then(res.redirect('/tasks'))
      .catch(error => console.log(error));
  }

  static async removeTask (req, res) {
    const id = req.body.id;

    await Task.destroy({ where: { id: id } });

    res.redirect('/tasks');
  }
  static async showTasks(req, res) {

    const tasks = await Task.findAll({ raw: true });

    res.render('tasks/all', { tasks });
  }

  static async updateTask(req, res) {

    const id = req.params.id;

    const task = await Task.findOne( { where: { id: id }, raw: true });

    res.render('tasks/edit', { task });

  }

  static async updateTaskSave(req, res) {
    const { id, title, description } = req.body;

    const task = {
      title,
      description
    };

    await Task.update(task, { where: { id: id } });

    res.redirect('/tasks');
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id;

    const taskStatus = {
      done: req.body.done === '0' ? true : false
    };

    await Task.update(taskStatus, { where: { id: id } });

    res.redirect('/tasks');
  }
}
