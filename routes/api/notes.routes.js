const router = require('express').Router();
const passport = require('passport');
const { add, get } = require('../../controllers/note.controller');

router.post('/', passport.authenticate('jwt', { session: false }), add);
router.get('/:id', get);

module.exports = router;