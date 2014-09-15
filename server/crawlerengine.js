'use strict';

var _getVideoInfos = function (search, callback) {
  var Video = require('./models/video').Video;
  var Crawler = require('crawler').Crawler;
  var c = new Crawler({ 'maxConnections' : 10 });
  var uri = 'https://www.youtube.com';
    
  if (search) {
    uri = uri + '/results?search_query=' + search;
  }
  
  c.queue([{
    'uri'       : uri,
    'callback'  : function (error, result, $) {
      var videoBlocks = $('.channels-content-item.yt-shelf-grid-item.yt-uix-shelfslider-item, .yt-lockup.yt-lockup-tile.yt-lockup-video.clearfix.yt-uix-tile');
      
      var videos = [];
      
      videoBlocks.each(function (index, block) {
        var b = $(block);
        var linkElement = b.find('.yt-uix-sessionlink.yt-uix-tile-link.spf-link.yt-ui-ellipsis.yt-ui-ellipsis-2, .yt-uix-tile-link.yt-ui-ellipsis.yt-ui-ellipsis-2.yt-uix-sessionlink.spf-link');
        var thumbElement = b.find('.video-thumb img');
        var durationElement = b.find('.video-time');
        var infoElements = b.find('.yt-lockup-content .yt-lockup-meta .yt-lockup-meta-info li');
        
        var video = new Video(
          'https://www.youtube.com' + linkElement.attr('href'), // Url
          linkElement.attr('title'),                            // Title
          { 'src' : thumbElement.attr('src'),                   // Thumb src
            'width' : thumbElement.attr('width'),               // Thumb width
            'height' : thumbElement.attr('height') },           // Thumb height
          durationElement.html(),                               // Duration
          $(infoElements[1]).text(),                            // Views
          $(infoElements[2]).text()                             // Since
        );
        
        videos.push(video);
      });
      
      callback(videos);
    }
  }]);
};

module.exports = {
  
  getVideoInfos : _getVideoInfos
  
};