import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { GithubIcon } from "./components/ui/icons/GithubIcon";
import Image from "next/image";
// import { ZennIcon } from "./components/ui/icons/ZennIcon";

export const metadata: Metadata = {
  title: "kkoouuya tech",
  description: "Tech Blog with kkoouuya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-[#EEF3FF] m-2">
        <header className="bg-white h-14 px-9 max-w-full flex items-center justify-between border border-transparent border-b border-gray-200 box-border shadow-xl mb-10">
          <Link href="/">
            <span className="font-bold text-lg">kkoouuya Tech</span>
          </Link>
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                {/* TODO altがあればair-labelはいらない？ */}
                <Link href="https://zenn.dev/kkoouuya" target="_blank">
                  <Image src="/logo-only.svg" alt="zenn" width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href="https://github.com/kkoouuya0730" target="_blank" aria-label="github">
                  <GithubIcon />
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="md:w-4/5 max-w-full mx-auto bg-white rounded-slg border border-gray-200 box-border shadow-xl p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
