"use client";

import { createClient } from "@/utils/supabase/client";

export default function LoginWithGoogle() {
  const supabase = createClient();

  const handleGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
        queryParams: {
          prompt: "select_account",
        },
      },
    });
    if (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleGoogle}
      className="flex mb-10 w-full items-center gap-3 rounded-lg border border-zinc-100 px-5 py-4 font-medium text-alpha-900 shadow-sm shadow-black/10 transition-all hover:border-zinc-200 hover:shadow-black/30"
    >
      Enter with Google
    </button>
  );
}
