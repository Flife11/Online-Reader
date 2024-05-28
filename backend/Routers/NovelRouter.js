const router = require('express').Router();
const NovelController = require('../Controllers/NovelController');

router.get('/', NovelController.GetFeaturedNovels);
router.get('/:name', NovelController.GetNovelDetail)

module.exports = router;