import { DataTypes } from 'sequelize';
import connection from '../../db/connection.mjs';

const Task = connection.define('Task', {
  title: {
    type: DataTypes.STRING,
    require: true,
  },
  description: {
    type: DataTypes.STRING,
    require: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    require: true,
  }
});

export default Task;
