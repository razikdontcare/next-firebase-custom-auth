import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 gap-4 bg-gray-100 bg-[url('/login-pattern.svg')] bg-cover">
      <div className="bg-white shadow-lg rounded p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter your credentials to continue.
        </p>
        <form className="flex flex-col w-full max-w-md gap-4">
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button variant="default" size="lg">
            Sign In
          </Button>
          <div className="flex justify-between mt-2 text-sm">
            <Link href="/forgot-password">Forgot Password?</Link>
            <Link href="/register">Create Account</Link>
          </div>
        </form>
        <div className="mt-2 text-sm text-center">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
