import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <Link href="/" className="underline hover:text-gray-300">
        Home
      </Link>
      <Link href="/about" className="ml-4 underline hover:text-gray-300">
        About
      </Link>
    </header>
  );
}