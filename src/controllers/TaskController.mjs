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
  static showTasks(req, res) {
    res.render('tasks/all');
  }
}
