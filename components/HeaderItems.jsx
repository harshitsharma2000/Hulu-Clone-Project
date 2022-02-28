import Link from "next/link";
function HeaderItems({ Icon, title }) {
  return (
    <div className="flex flex-col item-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        <Link href="../pages/404">{title}</Link>
      </p>
    </div>
  );
}

export default HeaderItems;
