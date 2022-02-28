import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/Outline";
import Link from "next/link";
import Image from "next/image";
import HeaderItems from "./HeaderItems";
import Custom404 from "../pages/404";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {/* Header Left Side Elements Components */}

        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* Header Right Side Image */}
      <div className="cursor-pointer hover:animate-bounce">
        <Link href="../pages/404">
          <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            alt="Hulu Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
