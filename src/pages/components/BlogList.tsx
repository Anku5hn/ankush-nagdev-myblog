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
  const [currentStart, setCurrentStart] = useState<number>(0);
  const [currentEnd, setCurrentEnd] = useState<number>(10);
  //switch case for page indentation
  const handlePage = (value: number) => {
    switch (value) {
      case 1:
        setCurrentPage(1);
        setCurrentStart(1);
        setCurrentEnd(10);
        break;
      case 2:
        setCurrentPage(2);
        setCurrentStart(11);
        setCurrentEnd(20);
        break;
      case 3:
        setCurrentPage(3);
        setCurrentStart(21);
        setCurrentEnd(30);
        break;
      case 4:
        setCurrentPage(4);
        setCurrentStart(31);
        setCurrentEnd(40);
        break;
      case 5:
        setCurrentPage(5);
        setCurrentStart(41);
        setCurrentEnd(50);
        break;
      case 6:
        setCurrentPage(6);
        setCurrentStart(51);
        setCurrentEnd(60);
        break;
      case 7:
        setCurrentPage(7);
        setCurrentStart(61);
        setCurrentEnd(70);
        break;
      case 8:
        setCurrentPage(8);
        setCurrentStart(71);
        setCurrentEnd(80);
        break;
      case 9:
        setCurrentPage(9);
        setCurrentStart(81);
        setCurrentEnd(90);
        break;
      case 10:
        setCurrentPage(10);
        setCurrentStart(91);
        setCurrentEnd(100);
        break;
      default:
        setCurrentPage(1);
        setCurrentStart(0);
        setCurrentEnd(10);
        break;

    }
  }
  return (
    <>
      { currentStart && currentEnd && <>
      {blogs.slice(currentStart, currentEnd).map((blog) => (
        <>
          <BlogContainer id={blog.id} title={blog.title} body={blog.body} userId={blog.userId} />
        </>
      ))}
      </>
      }
      {
        /*Page Desktop*/
      }
      <div className="md:flex lg:flex hidden justify-center gap-2 items-center w-[90vw] mt-2">
        <p>Page:</p>
        <div className="md:w-[50vw] lg:w-[50vw] w-[10vw] flex justify-between">
          <Button variant={currentPage === 1 ? 'contained' : 'text'} onClick={()=>{handlePage(1)}}>1</Button>
          <Button variant={currentPage === 2 ? 'contained' : 'text'} onClick={()=>{handlePage(2)}}>2</Button>
          <Button variant={currentPage === 3 ? 'contained' : 'text'} onClick={()=>{handlePage(3)}}>3</Button>
          <Button variant={currentPage === 4 ? 'contained' : 'text'} onClick={()=>{handlePage(4)}}>4</Button>
          <Button variant={currentPage === 5 ? 'contained' : 'text'} onClick={()=>{handlePage(5)}}>5</Button>
          <Button variant={currentPage === 6 ? 'contained' : 'text'} onClick={()=>{handlePage(6)}}>6</Button>
          <Button variant={currentPage === 7 ? 'contained' : 'text'} onClick={()=>{handlePage(7)}}>7</Button>
          <Button variant={currentPage === 8 ? 'contained' : 'text'} onClick={()=>{handlePage(8)}}>8</Button>
          <Button variant={currentPage === 9 ? 'contained' : 'text'} onClick={()=>{handlePage(9)}}>9</Button>
          <Button variant={currentPage === 10 ? 'contained' : 'text'} onClick={()=>{handlePage(10)}}>10</Button>
        </div>
      </div>
      {
        /*Page Mobile*/
      }
      <div className="w-full flex justify-around mt-2 md:hidden lg:hidden">
        <p>Page: </p>
      <Button variant={currentPage === 1 ? 'contained' : 'text'} onClick={()=>{handlePage(1)}}>1</Button>
          <Button variant={currentPage === 2 ? 'contained' : 'text'} onClick={()=>{handlePage(2)}}>2</Button>
          <Button variant={currentPage === 3 ? 'contained' : 'text'} onClick={()=>{handlePage(3)}}>3</Button>
          <Button variant={currentPage === 4 ? 'contained' : 'text'} onClick={()=>{handlePage(4)}}>4</Button>
          <Button variant={currentPage === 5 ? 'contained' : 'text'} onClick={()=>{handlePage(5)}}>5</Button>
      </div>
      <div className="w-full flex justify-around mt-2 md:hidden lg:hidden">
      <Button variant={currentPage === 6 ? 'contained' : 'text'} onClick={()=>{handlePage(6)}}>6</Button>
          <Button variant={currentPage === 7 ? 'contained' : 'text'} onClick={()=>{handlePage(7)}}>7</Button>
          <Button variant={currentPage === 8 ? 'contained' : 'text'} onClick={()=>{handlePage(8)}}>8</Button>
          <Button variant={currentPage === 9 ? 'contained' : 'text'} onClick={()=>{handlePage(9)}}>9</Button>
          <Button variant={currentPage === 10 ? 'contained' : 'text'} onClick={()=>{handlePage(10)}}>10</Button>
      </div>
    </>
  );
};

export default BlogList;