import { createSignal } from 'solid-js';

import { Button } from '@/components/ui/button';
export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <Button my="2" size="md" variant="primary" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </Button>
  );
}
