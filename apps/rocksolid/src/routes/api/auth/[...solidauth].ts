import { SolidAuth } from '@solid-mediakit/auth';

import { authOptions } from '@/server/auth';

// eslint-disable-next-line @typescript-eslint/unbound-method
export const { GET, POST } = SolidAuth(authOptions);
