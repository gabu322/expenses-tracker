import Image from "next/image";
import Link from "next/link";
export default function Navbar(params) {
    return <div className="w-full h-16 fixed bottom-0 flex flex-row justify-between bg-gray-50">
        <div className="w-16 h-16 flex items-center justify-center">
            <Image src="/icons/black/wallet.svg" alt="Wallet" width={32} height={32} />
        </div>

        <Link href="/dev" className="relative w-16 h-16 flex items-center justify-center transform scale-150 -translate-y-3">
            <Image src="/icons/black/addCircled.svg" alt="Add" width={48} height={48} className=" z-10" />
            <div className="absolute w-12 h-12 bg-gray-50 rounded-full "></div>
        </Link>

        <div className="w-16 h-16 flex items-center justify-center">
            <Image src="/icons/black/settings.svg" alt="Home" width={40} height={40} />
        </div>
    </div>;
}
