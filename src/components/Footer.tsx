import React from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "About", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Licensing", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-4 md:rounded-t-2xl xl:py-6">
        <div className="space-y-4 sm:space-y-4">
          <div className="flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
            <Link href="/" className="block max-w-fit">
              <div className="inline-flex items-center space-x-2">
                <Image
                  src="https://tse3.mm.bing.net/th?id=OIP.1fwIPS0UPPDwO84HRxoiBwHaHa&pid=Api&P=0&h=180"
                  width={32}
                  height={40}
                  alt="CodeScribe AI Logo"
                  className="h-10 w-8"
                />
                <p className="text-base">
                  <span className="font-bold">Code</span>
                  Scribe AI
                </p>
              </div>
            </Link>
            <ul className="mb-2 flex flex-wrap items-center font-medium sm:mb-0">
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="me-4 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 md:me-6"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr className="border-[#E4E4E7] dark:border-[#27272A]" />
          <p className="text-center text-sm leading-5 text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} CodeScribe AI, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
