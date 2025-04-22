import { products, Product } from "@/types/product"
import Link from "next/link";

export default async function ProductDetailPage({
    params
}:{
    params : Promise<{id:string}>
}) {
    const { id } = await params;
    const item : Product | undefined = products.find((item : Product) => item.id == id);

    if(!item){
        return <div>해당 아이템이 없습니다.</div>
    }

    return (
    <div className="mt-10 bg-white shadow-2xl shadow-gray-200 border-2 border-gray-200
                    rounded-md w-1/2 p-10">
        <ol>
            <li><span className="font-bold">ID : </span>{item.id}</li>
            <li><span className="font-bold">Name : </span>{item.name}</li>
            <li><span className="font-bold">Category : </span>{item.category}</li>
            <li><span className="font-bold">Price : </span>{item.price}원</li>
            <li><span className="font-bold">Description : </span>{item.description}</li>
        </ol>

        <div className="hover:cursor-pointer mt-10 hover:text-blue-600 flex justify-end">
            <Link href="/productlist2">[이전]</Link>
        </div>
    </div>
    )
}
