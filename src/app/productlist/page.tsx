'use client'
import { products, Product } from "@/types/product"
import ProductItem from "@/UI/ProductItem"
import { useState } from "react"

export default function ProductList() {
    const [clickId, setClickId] = useState<string>('');

    const handleClick = (id:string) => {
        setClickId(id);
    }

    return (
    <div className="w-full mt-10 flex flex-col justify-center items-center">
        <ul className="w-1/2">
            {
            products.map((item : Product) => 
                <li key={item.id} onClick={() => handleClick(item.id)} className="hover:cursor-pointer hover:text-blue-600">
                    [{item.id}] {item.name}
                </li>)
            }
        </ul>
        <ProductItem id={clickId} />
    </div>
    )
}
