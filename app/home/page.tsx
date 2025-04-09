import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from "@/components/LogoutButton";


export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="text-center mt-10">
        <p>You are not logged in. Redirecting to login...</p>
        <p>Please log in to access the home page.</p>
      </div>
    );
  }

  return (
    <div className="mb-40">
      <h1>Welcome to the Home Page!</h1>
      <p>Enjoy exploring amazing photos and galleries.</p>
      <LogoutButton />

    </div>
  );
}
