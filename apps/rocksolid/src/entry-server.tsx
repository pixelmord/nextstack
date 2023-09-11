import { getSession } from '@auth/solid-start';
import { redirect } from 'solid-start';
import { createHandler, renderAsync, StartServer } from 'solid-start/entry-server';

import { authOpts } from '@pixelstack/auth';

export default createHandler(
  ({ forward }) => {
    return async (event) => {
      if (new URL(event.request.url).pathname.startsWith('/app')) {
        const session = await getSession(event.request, authOpts);
        console.log(session);
        if (!session) {
          return redirect('/login'); // a page for a non logged in user
        }
      }
      return forward(event); // if we got here, and the pathname is inside the `protectedPaths` array - a user is logged in
    };
  },
  ({ forward }) => {
    return async (event) => {
      if (new URL(event.request.url).pathname === '/login') {
        const session = await getSession(event.request, authOpts);
        if (session) {
          return redirect('/app');
        }
      }
      return forward(event);
    };
  },
  renderAsync((event) => <StartServer event={event} />)
);
