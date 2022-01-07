const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');

router
.route("/users")
.get(controller.list_users)
.post(controller.create_user);

router
.route("users/:id")
.get(controller.read_user)
.put(controller.update_user)
.delete(controller.delete_user);

return router;
