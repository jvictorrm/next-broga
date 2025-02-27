import Navbar from "@/components/NavBar/Navbar";
import { getSession } from "@/helpers/session";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Best Nintendo 64 fan website",
  description: "Curso completo de NextJS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();

  return (
    <html lang="en">
      <body className="bg-slate-890 text-slate-300">
        <Navbar user={user} />
        <div className="ml-72">{children}</div>
      </body>
    </html>
  );
}
