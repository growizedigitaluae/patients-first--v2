import { ResetPasswordForm } from "@/components/member/PasswordForms";

export const metadata = { title: "Choose a new password" };

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm space-y-4">
          <h1 className="font-serif text-2xl text-midnight">Link not valid</h1>
          <p className="text-navy leading-relaxed text-[15px]">
            This password reset link isn&rsquo;t valid anymore. Please request a
            new one from the sign-in page.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl text-midnight">
            Choose a new password
          </h1>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
          <ResetPasswordForm token={token} />
        </div>
      </div>
    </main>
  );
}
