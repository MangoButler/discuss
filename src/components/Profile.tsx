"use client";
import { useSession } from "next-auth/react";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const session = useSession();
  if (session.data?.user) {
    return <div>{JSON.stringify(session.data.user)}</div>;
  } else {
    return <div>From client: user is NOT signed in</div>;
  }
};

export default Profile;
