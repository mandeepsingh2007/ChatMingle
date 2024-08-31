import React, { useEffect, useRef } from 'react';
import DailyIframe from '@daily-co/daily-js';

const VideoCall = ({ roomUrl }) => {
  const callFrameRef = useRef(null);

  useEffect(() => {
    // Create a new Daily call frame
    callFrameRef.current = DailyIframe.createFrame({
      showLeaveButton: true,
      iframeStyle: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        border: '0',
      },
    });

    // Join the room
    callFrameRef.current.join({ url: roomUrl });

    // Cleanup the frame on component unmount
    return () => callFrameRef.current?.destroy();
  }, [roomUrl]);

  return null;
};

export default VideoCall;
