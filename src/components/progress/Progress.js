/**
 * @license
 * Copyright Acquaint softtech. All Rights Reserved.
 * Licensed under the ISC License. See License.txt in the project root for license information.
 */

import React, { useEffect, useState } from 'react';
import { StyledView } from '../../StyledComponentsContstants';

/**
 * A progress element that can be used to show the progress of a task.
 */

const Progress = ({
  duration = 1000,
  onProgress,
  progressBarContainer = '',
  progressBarClass = '',
}) => {
  const [filledView, setFilledView] = useState(0);

  useEffect(() => {
    const steps = 100;
    const interval = duration / steps;

    const progressInterval = setInterval(() => {
      setFilledView(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, interval);

    return () => clearInterval(progressInterval);
  }, [duration]);

  useEffect(() => {
    if (onProgress) {
      onProgress(`${filledView}%`);
    }
  }, [filledView]);

  return (
    <StyledView
      className={`${styles.progressBarContainer} ${progressBarContainer}`}>
      <StyledView
        className={`${styles.progressBar} w-[${filledView}%] ${progressBarClass}`}
      />
    </StyledView>
  );
};

const styles = {
  progressBarContainer:
    'relative w-full h-3 overflow-hidden rounded-full bg-neutral-200',
  progressBar: 'absolute h-full bg-neutral-900',
};

export default Progress;
