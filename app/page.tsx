import HealthCheck from "@/components/HealthCheck";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HealthCheck />
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton mode="modal" />
        </SignedOut>
      </header>
    </main>
  );
}
