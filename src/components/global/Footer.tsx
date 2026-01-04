import Link from "next/link";
import YoutubeIcon from "../icons/YoutubeIcon";
import InstagramIcon from "../icons/InstagramIcon";
import FacebookIcon from "../icons/FacebookIcon";
import TikTokIcon from "../icons/TikTokIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#304F50] text-white pt-16 pb-8">
      <div className="container-box">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 mb-16">
          {/* Column 1: Logo & Contact */}
          <div className="flex flex-col gap-6 max-w-[250px]">
            <div className="flex items-center gap-3">
              <Image
                src={"/logo/logo-no-bg.svg"}
                alt="KKOSM Logo"
                width={55}
                height={55}
              />
              <span className="text-xl font-bold tracking-wide">KKOSM</span>
            </div>
            <div className="flex flex-col gap-2 text-sm lg:text-base text-[#FEF4E9]">
              <p>Kvemo Kartli, Georgia</p>
              <p>+995 599 123 456</p>
              <p>info@kkosm.ge</p>
            </div>
          </div>

          {/* Middle Columns Container */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-24">
            {/* Column 2: About Us */}
            <div className="flex flex-col gap-6">
              <h4 className="text-sm lg:text-base font-medium text-yellow-lighter">
                About us
              </h4>
              <div className="flex flex-col gap-4 text-sm lg:text-base text-[#FEF4E9] leading-relaxed max-w-[250px]">
                <p>
                  unites young people through scouting, adventure, and
                  community.
                </p>
                <p>
                  We help them grow as leaders, build friendships, and serve
                  society.
                </p>
              </div>
            </div>

            {/* Column 3: Programs */}
            <div className="flex flex-col gap-6">
              <h4 className="text-sm lg:text-base font-medium text-yellow-lighter">
                Programs
              </h4>
              <div className="flex flex-col gap-3 text-sm lg:text-base text-[#FEF4E9]">
                <Link href="#" className="hover:text-white transition-colors">
                  Leadership Training
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Outdoor Adventures
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Community Service
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Youth Development
                </Link>
              </div>
            </div>

            {/* Column 4: More Links */}
            <div className="flex flex-col gap-6">
              <h4 className="text-sm lg:text-base font-medium text-yellow-lighter">
                Programs
              </h4>
              <div className="flex flex-col gap-3 text-sm lg:text-base text-[#FEF4E9]">
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  News & Media
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Events
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Registration
                </Link>
              </div>
            </div>
          </div>

          {/* Column 5: Social Icons */}
          <div className="flex items-start gap-4">
            <Link
              href="#"
              className="text-[#FEF4E9] hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon />
            </Link>
            <Link
              href="#"
              className="text-[#FEF4E9] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              className="text-[#FEF4E9] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              className="text-[#FEF4E9] hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-[#FEF4E9] font-light pt-20 lg:pt-30">
          © 2025 KKOSM. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
