'use strict';

module.exports = function(router) {
  var crawlerEngine = require('./crawlerengine');
  
  /**
   * Gets video information
   */
  router.get('/api/videos?:search', function(req, res) {
    var search = req.query.search;
    crawlerEngine.getVideoInfos(search, function (videos) {
      console.log('done loading videos');
      res.json({ videos : videos });
    });
  });
};