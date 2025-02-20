interface OverlayProps {
   isOpen: boolean;
   toggleNavbar: () => void;
}

export default function Overlay({ isOpen, toggleNavbar }: OverlayProps) {
   return (
      <div
         className={`w-full h-full fixed bg-black transition-opacity duration-500 top-0 ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
         aria-hidden="true"
         onClick={toggleNavbar}
      />
   );
}
