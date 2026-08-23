import { ForgotPasswordForm } from "@/components/member/PasswordForms";

export const metadata = { title: "Forgot password" };

export default function ForgotPasswordPage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl text-midnight">Reset your password</h1>
          <p className="mt-2 text-[15px] text-navy leading-relaxed">
            Enter the email address on your membership and we&rsquo;ll send you
            reset instructions.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8">
          <ForgotPasswordForm />
        </div>
      </div>
    </main>
  );
}
