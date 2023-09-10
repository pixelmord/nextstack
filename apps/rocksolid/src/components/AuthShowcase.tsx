import { SignIn, SignOut } from '@/components/auth';

export function AuthShowcase() {
  const session = false;

  if (!session) {
    return (
      <SignIn
        provider="discord"
        class="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        Sign in with Discord
      </SignIn>
    );
  }

  return (
    <div class="flex flex-col items-center justify-center gap-4">
      <p class="text-center text-2xl text-white">{session && <span>Logged in as </span>}</p>

      <SignOut class="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20">
        Sign out
      </SignOut>
    </div>
  );
}
