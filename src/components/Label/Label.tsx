import React, { ReactNode } from 'react';

import * as css from './Label.css';

export type LabelProps = {
  content: ReactNode;
};

export const Label = ({ content }: LabelProps) => <span className={css.Label}>{content}</span>;
