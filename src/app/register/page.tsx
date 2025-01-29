import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Register() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <form className="bg-white shadow-lg rounded p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center">Create Account</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Please provide valid information to sign up.
        </p>
        <div className="flex flex-col gap-4">
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Button variant="default" size="lg">
            Sign Up
          </Button>
        </div>
        <div className="mt-2 text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600">
            Log In
          </Link>
        </div>
        <div className="mt-2 text-sm text-center">
          <Link href="/">← Back to Home</Link>
        </div>
      </form>
    </main>
  );
}
