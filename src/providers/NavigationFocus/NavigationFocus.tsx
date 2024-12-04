import React, {
  useMemo, useState, useContext, createContext
} from 'react';

import {
  Context, NavigationFocusProps
} from './types';

const FocusContext = createContext<Context>([undefined, () => {}]);

const FocusNavigationProvider = ({ children }:NavigationFocusProps):React.ReactElement => {
  const [value, setValue] = useState<string | undefined>();

  const set = useMemo<Context>(() => [value, setValue], [value]);
  return (
    <FocusContext.Provider value={set}>
      {children}
    </FocusContext.Provider>
  );
};

export const useNavigationFocus = ():Context => {
  const [
    value,
    setValue
  ] = useContext<Context>(FocusContext);

  return [value, setValue];
};

export default FocusNavigationProvider;
