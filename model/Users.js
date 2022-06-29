import {getData} from './db.js';
import { Sequelize } from 'sequelize';

const User = getData.sequelizeClient.define('tbl_userdb', 'cat_users',{

    id: {type: Sequelize.SMALLINT, primaryKey: true},
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone_number: Sequelize.STRING,

},{
    tableName: 'tbl_usersdb',
    tableName: "cat_users",
    createAt: false,
    updatedAt:false,

});
export const getUser = User;