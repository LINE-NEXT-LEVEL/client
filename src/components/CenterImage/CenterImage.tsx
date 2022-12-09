import React, { HTMLAttributes } from 'react';
import * as css from './CenterImage.css';

export type CenterImageProps = HTMLAttributes<HTMLImageElement>;

export const CenterImage = (props: CenterImageProps) => (
  <div className={css.CenterImageWrapper}>
    <img {...props} />
  </div>
);
