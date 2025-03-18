import { Link } from "react-router-dom";

export default function Card({ content }) {
  const { id, title, genre, imagePath } = content;

  return (
    <>
      <div className='gap-3u flex w-full flex-col'>
        <figure className='aspect-[2/3] w-full overflow-hidden rounded-md'>
          <img
            src={imagePath}
            alt={title}
            className='h-full w-full object-cover'
          />
        </figure>
        {/* card info */}
        <div className='gap-u flex flex-col'>
          <span className='px-3u py-2u font-body-s-bold w-fit rounded-md bg-indigo-50 text-indigo-500'>
            {genre}
          </span>
          <p className='font-body-l-bold text-smoke-950'>{title}</p>
        </div>
        <button className='px-7u py-4u min-h-[48px] rounded-full bg-indigo-600 text-white transition-all hover:cursor-pointer hover:bg-black hover:text-indigo-200 md:w-fit'>
          <Link to={`/movie/${id}`}>Leggi le Recensioni</Link>
        </button>
      </div>
    </>
  );
}
