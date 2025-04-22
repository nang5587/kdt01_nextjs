import Link from "next/link"

export default function ProductDetail() {
    return (
    <div className="mt-10">
        <div className="hover:cursor-pointer hover:text-blue-600">
        <Link href="/productlist2">[이전]</Link>
        </div>
    </div>
    )
}
