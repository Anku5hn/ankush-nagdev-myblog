interface Props{
    name: string
    body: string
    key: string | number;
}
const CommentSection: React.FC<Props> = ({name, body, key}) =>{
    return(
        <>
        <div className="flex justify-center items-center w-full font-serif mt-2" key={key}>
            <div className="block w-[90vw] h-[10vh]  rounded-sm">
                <button className="mx-1 py-1 bg-[#D1E8F7] my-1 rounded-l-full rounded-r-full px-2 font-semibold md:text-lg lg:text-lg text-xs">{name}</button>
                <p className="mx-2 my-1 md:text-lg lg:text-lg text-xs">{body}</p>
            </div>
        </div>
        </>
    )
}
export default CommentSection;