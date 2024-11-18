import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

console.log("Server-side log: Header =", Header);
console.log("Server-side log: Footer =", Footer);

export const metadata = {
  title: 'My App',
  description: 'Welcome to My Next.js App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* 共通のヘッダー */}
        <Header />
        {/* 各ページのコンテンツ */}
        <main className="flex-grow p-4">{children}</main>
        {/* 共通のフッター */}
        <Footer />
      </body>
    </html>
  );
}