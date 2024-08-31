import React from 'react';
import VideoCall from '@/components/ui/VideoCall';

const VideoCallPage = () => {
  const roomUrl = 'https://syncronus.daily.co/syncronus'; // Replace with your actual room URL

  return (
    <div>
      <VideoCall roomUrl={roomUrl} />
    </div>
  );
};

export default VideoCallPage;
