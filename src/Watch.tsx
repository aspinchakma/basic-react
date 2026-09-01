interface BookProps {
  author: string;
  bookId: number;
  bookName: string;
  category: string;
  image: string;
  publisher: string;
  rating: number;
  review: string;
  tags: string[];
  totalPages: number;
  yearOfPublishing: number;
}
const Watch = ({ book }: { book: BookProps }) => {
  console.log(book);
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative flex h-72 items-center justify-center bg-gray-100 p-6">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-full max-w-full rounded-lg object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        <div className="flex items-center justify-between">
          {/* Author */}
          <p className="mt-1 text-sm text-gray-500">
            by <span className="font-medium text-gray-700">{book.author}</span>
          </p>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
              <span className="text-yellow-500">★</span>
              <span className="text-sm font-semibold text-gray-700">
                {book.rating}
              </span>
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-gray-200 my-3"></div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Information */}
        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 truncate text-sm font-medium text-gray-700">
              {book.publisher}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Book ID</p>
            <p className="mt-1 text-sm font-medium text-gray-700">
              #{book.bookId}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5 flex items-center justify-between">
          <button className=" rounded-md bg-gray-900 px-3 py-2 font-semibold text-white transition hover:bg-indigo-600">
            View Details
          </button>
          <button className=" rounded-md bg-gray-900 px-3 py-2 font-semibold text-white transition hover:bg-indigo-600">
            View Details
          </button>
          <button className=" rounded-md bg-red-700 border border-red-700 px-3 py-2 font-semibold text-white transition hover:bg-white hover:text-red-700 cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
