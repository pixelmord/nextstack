// import { redirect } from 'solid-start';
import { createHandler, renderAsync, StartServer } from 'solid-start/entry-server';

// import { supabase } from '@/lib/supabase-client';

export default createHandler(
  // ({ forward }) => {
  //   return async (event) => {
  //     if (new URL(event.request.url).pathname.startsWith('/app')) {
  //       const {
  //         data: { user },
  //       } = await supabase.auth.getUser();
  //       console.log(user);
  //       if (!user) {
  //         return redirect('/login'); // a page for a non logged in user
  //       }
  //     }
  //     return forward(event); // if we got here, and the pathname is inside the `protectedPaths` array - a user is logged in
  //   };
  // },
  // ({ forward }) => {
  //   return async (event) => {
  //     if (new URL(event.request.url).pathname === '/login') {
  //       const {
  //         data: { user },
  //       } = await supabase.auth.getUser();
  //       console.log('login mw: ', user);
  //       if (user) {
  //         return redirect('/app');
  //       }
  //     }
  //     return forward(event);
  //   };
  // },
  // ({ forward }) => {
  //   return async (event) => {
  //     if (new URL(event.request.url).pathname === '/') {
  //       const {
  //         data: { user },
  //       } = await supabase.auth.getUser();
  //       console.log('home mw: ', user);
  //       if (user) {
  //         return redirect('/app');
  //       }
  //     }
  //     return forward(event);
  //   };
  // },
  renderAsync((event) => <StartServer event={event} />)
);
