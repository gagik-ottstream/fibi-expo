import { PropsWithChildren } from 'react';

export type NavigationFocusProps = PropsWithChildren;

export type Context = [string| undefined, React.Dispatch<React.SetStateAction<string | undefined>>]
