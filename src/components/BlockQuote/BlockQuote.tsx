import React, { ReactNode } from 'react';

import * as css from './BlockQuote.css';

export type BlockQuoteProps = {
  children: ReactNode;
};

export const BlockQuote = ({ children }: BlockQuoteProps) => (
  <div className={css.BlockQuote}>{children}</div>
);
