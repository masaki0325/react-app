import Headline from "@/components/Headline";

export default function AboutPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p>This is the content of the about page.</p>
      <Headline title="about page" page="about"/>
    </div>
  );
}

