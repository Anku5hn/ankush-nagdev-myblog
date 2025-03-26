import * as React from 'react';
import type { GetServerSideProps } from 'next';//import * type * GetServerSideProps
import BlogList from './components/BlogList';
import Header from './components/Header'
import HomeCarousel from './components/HomeCarousel'
import Footer from './components/Footer'
//blog interface
interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number;
}
//Props
interface Props {
  blogs: Blog[];
}
//Home Function
const Home: React.FC<Props> = ({ blogs }) => {
  return (
    <>
    <Header />
    <HomeCarousel />
    <BlogList blogs={blogs}/>
    <Footer />
      </>
  );
};
//GetServerSideProps for Page SSR https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
export const getServerSideProps = (async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const blogs: Blog[] = await res.json();
  return {
    props: { blogs },
  };
}) satisfies GetServerSideProps<{ blogs: Blog[] }>
//export
export default Home;
//referance: https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs-pages-router-ts/pages/index.tsx