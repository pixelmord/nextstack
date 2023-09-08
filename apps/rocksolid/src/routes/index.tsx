import { A } from 'solid-start';

import Counter from '@/components/Counter';
import { trpc } from '@/lib/trpc';
import { css } from '@/styled-system/css';
export default function Home() {
  const hello = trpc.example.hello.useQuery(() => ({ name: 'from tRPC' }));
  return (
    <>
      <h1>Hello world!</h1>
      {hello.data ?? 'Loading tRPC query'}
      <Counter />
      <A href="/app">App</A>
      <div class={css({ fontSize: '3xl', fontWeight: 'bold' })}>Hello 🐼!</div>
    </>
  );
}
