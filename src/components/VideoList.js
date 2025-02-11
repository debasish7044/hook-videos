import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos,onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.snippet.thumbnails.default.url} 
     onVideoSelect={onVideoSelect}
      video={video} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;