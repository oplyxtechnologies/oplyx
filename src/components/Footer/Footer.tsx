import Link from "next/link";
import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

import { Button } from "../ui/button";

// Define the links object
const links = {
  home: "/",
  about: "/About",
  services: "/Service",
  courses: "/courses",
  contact: "/contact",
  career: "/career",
  partner: "/partner",
};

export function SiteFooter() {
  return (
    <footer className="bg-secondary pt-16 text-secondary-foreground md:pt-20 lg:pt-24">
      <div className="container p-4 grid m-auto  grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <div className="space-y-4 md:max-w-[30ch] lg:space-y-6">
          <Image src="/logo.svg" width={200} height={40} alt="Logo" />
          <p className="text-justify text-secondary-foreground/80">
            Oplyx Technologies empowers businesses with innovative digital
            solutions, ensuring growth, efficiency, and seamless user
            experiences.
          </p>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href={links.home}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={links.about}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={links.services}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={links.courses}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href={links.contact}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={links.career}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href={links.partner}
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Become a Partner
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <h2 className="text-xl font-bold">Community</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/community/student"
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Student
              </Link>
            </li>
            <li>
              <Link
                href="/community/professional"
                className="font-medium text-secondary-foreground/80 transition hover:text-primary"
              >
                Professional
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 ">
          <h2 className="text-xl font-bold">Follow us on</h2>
          <ul className="flex flex-wrap gap-1">
            <li>
              <Link href="https://facebook.com" target="_blank">
                <Button
                  variant="secondary"
                  size="icon"
                  className="group brightness-125 transition hover:bg-primary"
                >
                  <FacebookIcon className="h-4 w-4 fill-primary stroke-none group-hover:fill-white" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com" target="_blank">
                <Button
                  variant="secondary"
                  size="icon"
                  className="group brightness-125 transition hover:bg-primary"
                >
                  <InstagramIcon className="h-4 w-4 stroke-primary group-hover:stroke-white" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com" target="_blank">
                <Button
                  variant="secondary"
                  size="icon"
                  className="group brightness-125 transition hover:bg-primary"
                >
                  <TwitterIcon className="h-4 w-4 fill-primary stroke-none group-hover:fill-white" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="https://linkedin.com" target="_blank">
                <Button
                  variant="secondary"
                  size="icon"
                  className="group brightness-125 transition hover:bg-primary"
                >
                  <LinkedinIcon className="h-4 w-4 fill-primary stroke-none group-hover:fill-white" />
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="container m-auto my-8 border-secondary-foreground/10" />

      <div className="container m-auto pb-8 text-secondary-foreground/90">
        Copyrights © {new Date().getFullYear()} Oplyx Technologies
      </div>
    </footer>
  );
}
