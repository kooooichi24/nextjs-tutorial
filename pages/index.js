import Card from "../components/molecules/card";
import Top from "../components/molecules/top";
import { useState } from "react";
import Copyright from "../components/molecules/copyright";
import Nav from "../components/molecules/nav";
import BlogInfo from "../components/molecules/blogInfo";
import Pagination from "../components/molecules/pagination";
import AuthorsList from "../components/molecules/authorsList";
import CategoryList from "../components/molecules/categoryList";
import RecentBlog from "../components/molecules/recentBlog";
import Footer from "../components/molecules/footer";

const options = [
  {
    label: "Latest",
    value: "Latest",
  },
  {
    label: "Last Week",
    value: "Last Week",
  },
];

const blogInfos = [
  {
    title: "Build Your New Idea with Laravel Freamwork.",
    titleUrl: "#",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    blogUrl: "#",
    postedAt: new Date("June 1, 2020"),
    tagName: "Laravel",
    tagUrl: "#",
    blogAuthor: "Alex John",
    authorImage:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
  },
  {
    title: "Accessibility tools for designers and developers",
    titleUrl: "#",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    blogUrl: "#",
    postedAt: new Date("March 4, 2019"),
    tagName: "Design",
    tagUrl: "#",
    blogAuthor: "Jane Doe",
    authorImage:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
  },
  {
    title: "PHP: Array to Map",
    titleUrl: "#",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    blogUrl: "#",
    postedAt: new Date("February 14, 2019"),
    tagName: "PHP",
    tagUrl: "#",
    blogAuthor: "Lisa Way",
    authorImage:
      "https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80",
  },
  {
    title: "Django Dashboard - Learn by Coding",
    titleUrl: "#",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    blogUrl: "#",
    postedAt: new Date("December 23, 2018"),
    tagName: "Django",
    tagUrl: "#",
    blogAuthor: "Steve Matt",
    authorImage:
      "https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80",
  },
  {
    title: "TDD Frist",
    titleUrl: "#",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    blogUrl: "#",
    postedAt: new Date("March 10, 2018"),
    tagName: "Testing",
    tagUrl: "#",
    blogAuthor: "Khatab Wedaa",
    authorImage:
      "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80",
  },
  {
    title: "Alex John 2",
    titleUrl: "#",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    blogUrl: "#",
    postedAt: new Date("June 1, 2020"),
    tagName: "Laravel",
    tagUrl: "#",
    blogAuthor: "Alex John",
    authorImage:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
  },
  {
    title: "Alex John 3",
    titleUrl: "#",
    abstract:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
    blogUrl: "#",
    postedAt: new Date("June 1, 2020"),
    tagName: "Laravel",
    tagUrl: "#",
    blogAuthor: "Alex John",
    authorImage:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
  },
];

const brands = [
  {
    viewBox: "0 0 512 512",
    d: "M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z",
    brandUrl: "#",
  },
  {
    viewBox: "0 0 512 512",
    d: "M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z",
    brandUrl: "#",
  },
  {
    viewBox: "0 0 512 512",
    d: "M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z",
    brandUrl: "#",
  },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const getRecentBlog = () => {
    const sorted = blogInfos.sort((a, b) => a.postedAt > b.postedAt);
    return sorted[0];
  };

  return (
    <>
      <Copyright></Copyright>
      <Nav></Nav>
      <Top
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      ></Top>
      selectedOption: {selectedOption}
      {blogInfos.map((blog, i) => (
        <div key={i}>
          <BlogInfo
            postedAt={blog.postedAt}
            tagName={blog.tagName}
            tagUrl={blog.tagUrl}
            blogTitle={blog.title}
            blogAbstract={blog.abstract}
            blogUrl={blog.blogUrl}
          ></BlogInfo>
          <Card
            href={blog.blogUrl}
            src={blog.authorImage}
            name={blog.blogAuthor}
          ></Card>
        </div>
      ))}
      <Pagination total={blogInfos.length}></Pagination>
      <AuthorsList blogInfos={blogInfos}></AuthorsList>
      <CategoryList blogInfos={blogInfos}></CategoryList>
      <RecentBlog
        postedAt={getRecentBlog().postedAt}
        tagName={getRecentBlog().tagName}
        tagUrl={getRecentBlog().tagUrl}
        blogTitle={getRecentBlog().title}
        blogUrl={getRecentBlog().blogUrl}
        author={getRecentBlog().blogAuthor}
        authorImage={getRecentBlog().authorImage}
      ></RecentBlog>
      <Footer brands={brands}></Footer>
    </>
  );
}
