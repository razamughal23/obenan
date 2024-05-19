"use client";
import dynamic from "next/dynamic";
const Blogs  = dynamic(() => import( "app/components/blog"));

interface Props {
  blogs: any[];
  category: any;
  paginationCount: number;
  params: any;
}
const Blog = (props: Props) => {
  return <Blogs {...props} />;
};
export default Blog;
