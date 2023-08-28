import Counter from '@/components/Counter';
import { css } from '@/styled-system/css';
export default function Home() {
  return (
    <>
      <h1>Hello world!</h1>
      <Counter />

      <div class={css({ fontSize: '3xl', fontWeight: 'bold' })}>Hello 🐼!</div>
      <p>
        Visit the{' '}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
    </>
  );
}
