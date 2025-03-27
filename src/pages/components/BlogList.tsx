import React, { useState } from 'react'
import BlogContainer from './BlogContainer'
import Button from '@mui/material/Button'
//interface for blog
interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number
}
//BlogListProps interface
interface BlogListProps {
  blogs: Blog[];
}
//map blog list
const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = (currentPage - 1) * 10;
  const endIndex = (startIndex) + 10;
  const posts = blogs?.slice(startIndex, endIndex);
  const handlePage = (value: number) => {
    setCurrentPage(value);
  }
  return (
    <>

      {posts?.map((blog) => (
        <>
          <BlogContainer id={blog.id} title={blog.title} body={blog.body} userId={blog.userId} />
        </>
      ))}

      {
        /*Page Desktop*/
      }
      <div className="md:flex lg:flex hidden justify-center gap-2 items-center w-[90vw] mt-2">
        <p>Page:</p>
        <div className="md:w-[50vw] lg:w-[50vw] w-[10vw] flex justify-between">
          <Button variant={currentPage === 1 ? 'contained' : 'text'} onClick={() => { handlePage(1) }}>1</Button>
          <Button variant={currentPage === 2 ? 'contained' : 'text'} onClick={() => { handlePage(2) }}>2</Button>
          <Button variant={currentPage === 3 ? 'contained' : 'text'} onClick={() => { handlePage(3) }}>3</Button>
          <Button variant={currentPage === 4 ? 'contained' : 'text'} onClick={() => { handlePage(4) }}>4</Button>
          <Button variant={currentPage === 5 ? 'contained' : 'text'} onClick={() => { handlePage(5) }}>5</Button>
          <Button variant={currentPage === 6 ? 'contained' : 'text'} onClick={() => { handlePage(6) }}>6</Button>
          <Button variant={currentPage === 7 ? 'contained' : 'text'} onClick={() => { handlePage(7) }}>7</Button>
          <Button variant={currentPage === 8 ? 'contained' : 'text'} onClick={() => { handlePage(8) }}>8</Button>
          <Button variant={currentPage === 9 ? 'contained' : 'text'} onClick={() => { handlePage(9) }}>9</Button>
          <Button variant={currentPage === 10 ? 'contained' : 'text'} onClick={() => { handlePage(10) }}>10</Button>
        </div>
      </div>
      {
        /*Page Mobile*/
      }
      <div className="w-[80vw] flex justify-around mt-2 md:hidden lg:hidden">
        <p>Page: </p>
        <Button variant={currentPage === 1 ? 'contained' : 'text'} onClick={() => { handlePage(1) }}>1</Button>
        <Button variant={currentPage === 2 ? 'contained' : 'text'} onClick={() => { handlePage(2) }}>2</Button>
        <Button variant={currentPage === 3 ? 'contained' : 'text'} onClick={() => { handlePage(3) }}>3</Button>
        <Button variant={currentPage === 4 ? 'contained' : 'text'} onClick={() => { handlePage(4) }}>4</Button>
        <Button variant={currentPage === 5 ? 'contained' : 'text'} onClick={() => { handlePage(5) }}>5</Button>
      </div>
      <div className="w-[80vw] flex justify-around mt-2 md:hidden lg:hidden">
        <Button variant={currentPage === 6 ? 'contained' : 'text'} onClick={() => { handlePage(6) }}>6</Button>
        <Button variant={currentPage === 7 ? 'contained' : 'text'} onClick={() => { handlePage(7) }}>7</Button>
        <Button variant={currentPage === 8 ? 'contained' : 'text'} onClick={() => { handlePage(8) }}>8</Button>
        <Button variant={currentPage === 9 ? 'contained' : 'text'} onClick={() => { handlePage(9) }}>9</Button>
        <Button variant={currentPage === 10 ? 'contained' : 'text'} onClick={() => { handlePage(10) }}>10</Button>
      </div>
    </>
  );
};

export default BlogList;