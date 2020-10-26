import { createContext } from 'react';
import { WaccayApiContextType } from './_types';

export const WaccayApiContext = createContext<WaccayApiContextType>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  undefined as any
);
