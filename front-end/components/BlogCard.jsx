import Link from "next/link";

export default function BlogCard({ title, author, coverPhoto, datePublished, slug, content }) {
  const MAX_LENGTH = 500;

  function truncate(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    }
    return str;
  }

  const truncatedTitle = truncate(title, 50);
  const truncatedContent = truncate(content.html, MAX_LENGTH);

  return (
    <div className="">
      <Link href={"/posts/" + slug}>
        <div className="flex p-10 lg:pl-48 lg:pr-48 hover:p-8 ease-in-out duration-300">
          <img src={coverPhoto.url} alt="" className="rounded-2xl w-32 h-64 lg:w-64 object-cover" />
          <div>
            <h2 className="text-2xl font-serif font-semibold text-ellipsis pl-5">{truncatedTitle}</h2>
            <div className="lg:pl-5 lg:pt-5 lg:block md:pl-5 md:pt-5 md:block hidden pr-48" dangerouslySetInnerHTML={{ __html: truncatedContent }} />
            <p className="pl-5 pt-5 text-gray-400 text">{datePublished}</p>
          </div>
        </div>
      </Link>
      <div className="mx-auto border-b-2 border-gray-300 my-5 w-3/4"></div>
    </div>
  );
}
