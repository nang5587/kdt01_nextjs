import Link from "next/link"
import { products, Product } from "@/types/product"


export default function ProductList() {

    return (
    <div className="w-full mt-10 flex flex-col justify-center items-center">
        <ul className="w-1/2">
            {
                products.map((item : Product) => 
                    <li key={item.id} className="hover:cursor-pointer hover:text-blue-600 mb-2">
                        <Link href={`/productdetail/${item.id}`}>[{item.id}] {item.name}</Link>
                    </li>)
            }
        </ul>
    </div>
    )
}