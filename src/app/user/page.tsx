import { getSession } from "@/helpers/session";
import { redirect } from "next/navigation";

const User = async () => {
  const user = await getSession();
  if (!user) redirect("/auth/sign-in");

  return (
    <div className="container mx-auto my-6">
      <div className="w-2/3">
        <h3 className="text-2xl my-6">Account</h3>
        <div className="my-6 flex flex-col">
          <p className="my-2">{user.name}</p>
          <p className="my-2">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
