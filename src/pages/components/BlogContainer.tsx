import Button from '@mui/material/Button'
import Link from 'next/link';//link for linking the blog to the /post/[id].tsx page
//singular prop will be used in this component
interface Props {
    id: number
    title: string
    body: string
    userId: number
}

const BlogContainer: React.FC<Props> = ({ id, title, body, userId }) => {
    return (
        <>

            <div className="flex w-full font-serif justify-center" key={userId}>
                <div className="block w-[90vw] md:flex lg:flex justify-center flex-col items-center" key={userId}>
                    <button className="bg-[#D1E8F7] px-1 py-1 mt-2">Blog</button>
                    <h2 className="text-lg md:text-3xl lg:text-3xl font-semibold">{title}</h2>
                    <p className="md:text-lg lg:text-lg">{body}</p>
                    <Link href={`/post/${id}`}>
                        <Button variant="text">Read More</Button>
                    </Link>
                </div>
            </div>
            <hr className="border-gray-500 border text-gray-500 mt-1 mx-2" />
        </>)
}
export default BlogContainer;