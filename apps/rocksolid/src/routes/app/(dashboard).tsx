import { trpc } from '@/lib/trpc';

export default function Dashboard() {
  const res = trpc.auth.getSession.useQuery();
  return (
    <>
      <h1>Dashboard {res.data?.user?.name}</h1>
    </>
  );
}
