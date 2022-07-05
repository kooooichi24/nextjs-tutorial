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
      <Footer></Footer>
    </>
  );
}
