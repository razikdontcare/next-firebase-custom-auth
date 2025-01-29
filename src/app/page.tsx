import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-5xl font-extrabold mb-4 text-slate-800">Welcome</h1>
      <p className="text-lg text-slate-600 mb-8 tracking-wide">
        NextJS + Firebase + Custom Auth Token
      </p>
      <div className="mt-6 p-6 bg-white shadow-lg rounded-md text-center max-w-xl">
        <p className="mb-4 text-slate-600">
          Explore the platform and enjoy a smooth authentication experience.
        </p>
        <Button variant="default" size="lg" asChild>
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </main>
  );
}
