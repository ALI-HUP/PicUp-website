import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ImageGrid from "@/components/ImageGrid";
import Image from "next/image";
import profilePic from "@/public/profile/360_F_819663119_che4sZSrmQv8uQJOzuN9TVQFQNHJlfQ2.jpg";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-center mt-10">Access Denied. Please log in.</p>;
  }

  return (
    <div className="mb-40">
      <ImageGrid images={[]} />

      <div className="flex justify-center items-center flex-col">
        <div className="bg-slate-700 p-10 w-[50%] m-5 flex gap-20">
          <div>
            <p>Welcome to the Home Page! Here's your profile info.</p>
          </div>
          <div>
            <Image alt="profile pic" src={profilePic} className="w-40" />
          </div>
        </div>
      </div>
    </div>
  );
}
