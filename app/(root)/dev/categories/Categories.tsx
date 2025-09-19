import { CategoryType } from "@/lib/types";
import { PencilLine, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
   category: CategoryType;
   handleDelete: (id: string) => void;
}

export function Category({ category, handleDelete }: CategoryProps) {
   return (
      <div
         className="flex flex-row items-center justify-between rounded-sm p-4 text-white font-bold"
         style={{ backgroundColor: category.color }}
      >
         <div className="flex-row-3">
            {category.icon && <Image src={category.icon} alt="icon" width={32} height={128} />}
            <p>{category.name}</p>
         </div>

         <div className="flex flex-row gap-4">
            <Link href={`/dev/categorys/${category.id}`}>
               <PencilLine size={20} />
            </Link>

            <X size={20} onClick={() => category.id && handleDelete(category.id)} className="cursor-pointer" />
         </div>
      </div>
   );
}
