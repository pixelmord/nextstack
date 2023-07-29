import { createSignal } from 'solid-js';

import { styled } from '~/styled-system/jsx';
export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <styled.button bg="blue.500" color="white" py="2" px="4" rounded="md" my="2" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </styled.button>
  );
}
