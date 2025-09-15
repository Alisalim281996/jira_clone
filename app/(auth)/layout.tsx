"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const is_sign_in = pathname === "/sign-in";

  return (
    <main className="min-h-screen ">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image
            src={"/favicon.ico"}
            alt="logo"
            width={80}
            height={60}
            priority
          />
          <Button variant={"default"}>
            <Link href={is_sign_in ? "/sign-up" : "/sign-in"}>
              {is_sign_in ? "Sign-up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
