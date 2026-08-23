import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-32">
      <div className="text-center space-y-6">
        <p className="text-gold font-serif text-7xl">404</p>
        <h1 className="text-3xl font-serif text-midnight">This page couldn’t be found</h1>
        <p className="text-navy max-w-md mx-auto">
          The page you’re looking for may have moved. Let’s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#C88A2B] to-[#fCDA7B] hover:opacity-95 text-royal px-8 py-4 rounded-full font-semibold transition"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </main>
  );
}
