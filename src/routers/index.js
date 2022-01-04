const {Router} = require('express');
const res = require('express/lib/response');
const router = Router();

const { getUsers } = require('../controllers/index.controller')
const { runTask } = require('../controllers/sctasks.controller')

router.get('/user', getUsers)
router.get('/runtask', runTask)

module.exports = router