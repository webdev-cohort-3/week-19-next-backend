import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        Todo Application
        <br />
        <Link className="text-md border m-2" href={"/signin"}>Sign in to Todo app</Link>
        <br />
        <Link className="text-md border m-2" href={"/signin"}>Sign up to Todo app</Link>
      </div>
    </div>
  );
}