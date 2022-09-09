const express = require('express');
const crudController = require('./crudController');
const User = require("../models/userModel")
const router = express.Router();

router.post("", crudController(User).Post)
router.get("", crudController(User).Get)
router.get("/:id", crudController(User).GetOne)
router.delete("/:id", crudController(User).Delete)
router.patch("/:id", crudController(User).Patch)

module.exports = router