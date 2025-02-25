const express = require('express');
const router = express.Router();
const {
    getAllCompain,
  getCompainById,
  addCompain,
  updateCompain,
  deleteCompain
} = require('../controllers/compainController');


router.get('/compain',getAllCompain);
router.get('/compain/:id',getCompainById);
router.post('/compain/add',addCompain);
router.put('/compain/:id',updateCompain);
router.delete('/compain/:id',deleteCompain);

module.exports=router;