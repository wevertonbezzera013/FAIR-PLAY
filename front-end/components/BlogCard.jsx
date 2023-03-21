import Link from "next/link"

export default function BlogCard({ title, author, coverPhoto, datePublished, slug, content }) {
  const MAX_LENGTH = 500;
  const truncatedContent = content.html.length > MAX_LENGTH ? content.html.slice(0, MAX_LENGTH) + '...' : content.html;

  return (
    <div className="">
      <Link href={'/posts/' + slug}>
        <div className="flex p-10 lg:pl-48 lg:pr-48">
          <img src={coverPhoto.url} alt="" className="rounded-2xl w-32 h-64 lg:w-64 object-cover"/>
          <div>
            <h2 className="font-serif font-semibold text-ellipsis pl-5">{title}</h2>
            <div className="lg:pl-5 lg:pt-5 lg:block hidden pr-48" dangerouslySetInnerHTML={{ __html: truncatedContent }} />
            <p className="pl-5 pt-5 text-gray-400 text">{datePublished}</p>
          </div>
        </div>
      </Link>
      <div className="mx-auto border-b-2 border-gray-300 my-5 w-3/4"></div> {/* Here's the new line */}
    </div>
  )
}
