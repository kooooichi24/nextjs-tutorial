import Link from "next/link";
import Image from "next/image";

const YourComponent = () => (
  <Image
    src="/images/cat.jpeg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={288} // Desired size with correct aspect ratio
    alt="Cat"
  />
);

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <YourComponent />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
