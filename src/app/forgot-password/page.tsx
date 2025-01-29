import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white shadow-lg rounded p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Reset Your Password
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          We will send you an email with instructions to set a new password.
        </p>
        <form className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" />
          <Button variant="default" size="lg">
            Reset Password
          </Button>
        </form>
        <div className="mt-2 text-sm text-center">
          Remembered your password?{" "}
          <Link href="/login" className="text-blue-600">
            Log In
          </Link>
        </div>
        <div className="mt-2 text-sm text-center">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
