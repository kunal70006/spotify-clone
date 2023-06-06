import Sidebar from "~/components/SIdebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import SupabaseProvider from "~/providers/SupabaseProvider";
import UserProvider from "~/providers/UserProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone Using NextJS app/ dir",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
