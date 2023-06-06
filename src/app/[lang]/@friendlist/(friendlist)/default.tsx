import { ReactNode } from 'react';
import Layout from './layout';

interface DefaultProps {
  params: { lang: string };
  contentManager: ReactNode;
  userManager: ReactNode;
  children: ReactNode;
}

export default function Default(props: DefaultProps) {
  return Layout(props);
}
