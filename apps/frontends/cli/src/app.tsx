import { Text } from 'ink';
import { type ReactNode } from 'react';

interface AppProps {
  name: string | undefined;
}

export default function App({ name = 'Stranger' }: Readonly<AppProps>): ReactNode {
  return (
    <Text>
      Hello, <Text color='green'>{name}</Text>
    </Text>
  );
}
