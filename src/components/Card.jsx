import { Link } from "react-router-dom";

export default function Card({ content }) {
  const { id, title, genre } = content;

  return (
    <>
      <div>
        <h3>{title}</h3>
        <p>{genre}</p>
        <button className='bg-black text-white'>
          <Link to={`/movie/${id}`}>Leggi le Recensioni</Link>
        </button>
      </div>
    </>
  );
}
