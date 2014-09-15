'use strict';

module.exports.Video = function(url, title, tumbnail, duration, views, since) {
  return {
    'url'     : url,
    'title'   : title,
    'tumbnail': tumbnail,
    'duration': duration,
    'views'   : views,
    'since'   : since
  };
};