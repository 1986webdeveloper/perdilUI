import React, { useState } from 'react';
import { StyledSafeAreaView } from '../../StyledComponentsContstants';
import Progress from './Progress';

const ProgressView = () => {
  const [progress, setProgress] = useState(0);

  return (
    <StyledSafeAreaView className="h-full items-center justify-center mx-10">
      <Progress duration={1000} onProgress={e => setProgress(e)} />
    </StyledSafeAreaView>
  );
};

export default ProgressView;
