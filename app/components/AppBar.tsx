import Link from "next/link";
import AuthButton from "./AuthButton";

const AppBar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href={"/"}>
        Home Page
      </Link>
      <Link className="transition-colors hover:text-blue-500" href={"/post"}>
        User Post Page
      </Link>
      <AuthButton />
    </header>
  );
};

export default AppBar;
