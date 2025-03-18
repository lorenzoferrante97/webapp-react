import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalProvider, useGlobalContext } from "../contexts/GlobalContext";
import { Star } from "@phosphor-icons/react";

export default function Movie() {
  const { id } = useParams();

  const { movie, fetchMovie } = useGlobalContext();

  const [reviews, setReviews] = useState([]);

  const reviewStars = ["regular", "regular", "regular", "regular", "regular"];
  const StarsColorFilled = "#FFD230";
  const StarsColorOutline = "#FFB900";

  useEffect(() => fetchMovie(id), [id]);

  useEffect(() => setReviews(movie?.reviews), [movie]);

  const { title, imagePath, director, genre, release_year, abstract } = movie;

  return (
    <>
      <main className='container-full z-0 items-center'>
        <section className='perfect-center relative flex h-[28vh] w-full'>
          <h1 className='font-display-1'>{title}</h1>
        </section>
        <section className='gap-12u relative flex min-h-screen w-full flex-col items-center rounded-xl bg-white shadow-2xl'>
          <figure className='relative top-[-40px] aspect-[2/3] w-[280px] overflow-hidden rounded-md shadow-lg'>
            <img
              src={imagePath}
              alt={title}
              className='h-full w-full object-cover'
            />
          </figure>
          {/* movie info */}
          <div className='gap-12u flex w-full max-w-[92%] flex-col items-center md:max-w-[68%]'>
            <h2 className='font-display-3'>Info</h2>
            <div className='gap-x-3u gap-y-8u md:gap-5u xl:gap-7u grid w-full grid-cols-2'>
              {/* director */}
              <div className='gap-2u flex w-full flex-col items-center'>
                <p className='font-h4'>Director</p>
                <p className='font-body-base-regular'>{director}</p>
              </div>
              {/* genre */}
              <div className='gap-2u flex w-full flex-col items-center'>
                <p className='font-h4'>Genre</p>
                <span className='font-body-base-regular px-3u py-2u font-body-s-bold w-fit rounded-md bg-indigo-50 text-indigo-500'>
                  {genre}
                </span>
              </div>
              {/* release year */}
              <div className='gap-2u flex w-full flex-col items-center max-lg:col-span-full'>
                <p className='font-h4'>Release Year</p>
                <p className='font-body-base-regular'>{release_year}</p>
              </div>
              {/* abstract */}
              <div className='gap-2u flex w-full flex-col items-center max-lg:col-span-full'>
                <p className='font-h4'>Abstract</p>
                <p className='font-body-base-regular text-center'>{abstract}</p>
              </div>
            </div>
          </div>

          {/* reviews */}
          <div className='gap-10u flex w-full max-w-[92%] flex-col items-center md:max-w-[48%]'>
            <h2 className='font-display-3'>Reviews</h2>
            <div className='gap-3u flex w-full flex-col items-center'>
              {reviews?.map(review => {
                const { id, name, vote, text } = review;
                console.log("vote: ", vote);
                return (
                  <div
                    key={id}
                    className='gap-2u p-4u border-smoke-100 flex w-full flex-col rounded-lg border'>
                    <p className='font-body-l-bold text-smoke-950'>{name}</p>
                    {/* stars */}
                    <div className='gap-u flex items-center'>
                      {reviewStars.map((starStyle, i) => {
                        return i <= vote - 1 ? (
                          <Star
                            weight='fill'
                            key={i}
                            color={StarsColorFilled}
                          />
                        ) : (
                          <Star
                            weight={starStyle}
                            key={i}
                            color={StarsColorOutline}
                          />
                        );
                      })}
                    </div>
                    <p className='font-body-l-regular text-smoke-700'>
                      <span className='text-smoke-300'>"</span>
                      {text}
                      <span className='text-smoke-300'>"</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
