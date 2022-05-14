const user = require('./user_game_controller');
const biodata = require('./user_game_biodata.controller');
const history = require('./user_game_history.controller');

const controller ={};

controller.user = user;
controller.biodata = biodata;
controller.history = history;

module.exports = controller;