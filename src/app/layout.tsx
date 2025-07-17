import "./globals.css";
import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-start">
          <div>
            <SideBar />
          </div>
          <div className="m-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
