// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next Routing Workshop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-slate-900 text-white px-6 py-3">
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/courses">Courses</Link>
          </nav>
        </header>

        <main  className="flex-1 px-6 py-4">{children}</main>

         <footer className="bg-slate-100 text-center text-sm py-3 text-slate-500">
          © {new Date().getFullYear()} Session Planner · All rights reserved
        </footer>
      </body>
    </html>
  );
}
