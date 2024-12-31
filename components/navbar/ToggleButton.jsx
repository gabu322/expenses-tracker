import Image from "next/image";

export default function ToggleButton({ isOpen, toggleNavbar }) {
   return <div
      className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center z-[12] scale-150 transition-all duration-500 ${isOpen ? "-translate-y-7" : "-translate-y-3"}`}
      onClick={toggleNavbar}
      role="button"
      tabIndex={0}
      aria-label="Toggle Navbar"
   >
      <Image
         src="/icons/black/addCircled.svg"
         alt="Toggle Navbar"
         width={48}
         height={48}
         className="z-10"
      />
      <div className="absolute w-12 h-12 bg-white rounded-full"></div>
   </div>;
}
