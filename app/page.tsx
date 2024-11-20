import Headline from "@/components/Headline"

console.log("Server-side log: Footer =", Headline);

export default function HomePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
      <Headline title="title" page="page" />
    </div>
  );
}