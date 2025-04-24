import { products, Product } from "@/types/product"
import Link from "next/link";

export default async function ProductDetailPage2({
    searchParams
}:{
    searchParams : Promise<{id:string}>
}) {
    
    const {id} = await searchParams ;
    const product : Product | undefined = products.find((item: Product)=> item.id == id);
    if(!product) {
        return <div className="mt-10"> 상품이 존재하지 않습니다. </div>
    }
    return (
    <div className="mt-10 bg-white shadow-2xl shadow-gray-200 border-2 border-gray-200
                    rounded-md w-1/2 p-10">
        <ol>
            <li><span className="font-bold">ID : </span>{product.id}</li>
            <li><span className="font-bold">Name : </span>{product.name}</li>
            <li><span className="font-bold">Category : </span>{product.category}</li>
            <li><span className="font-bold">Price : </span>{product.price}원</li>
            <li><span className="font-bold">Description : </span>{product.description}</li>
        </ol>
        <div className="hover:cursor-pointer mt-10 hover:text-blue-600 flex justify-end">
            <Link href="/productlist3">[이전]</Link>
        </div>
    </div>
    )
}
