import Review from "../Review";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { Star } from "@phosphor-icons/react";

export default function Reviews({ content, movieId }) {
  const reviews = content;

  const reviewStars = ["regular", "regular", "regular", "regular", "regular"];
  const StarsColorFilled = "#FFD230";
  const StarsColorOutline = "#FFB900";

  const { movie, formData, formResult, handleMultiInput, handleSubmit } =
    useGlobalContext();

  const { average_vote } = movie;

  return (
    <>
      {/* reviews */}
      <div className='gap-10u flex w-full max-w-[92%] flex-col items-center md:max-w-[80%]'>
        <h2 className='font-display-3'>Reviews</h2>
        <div className='row-grid relative w-full'>
          {/* reviews form */}
          <div className='bg-smoke-50 p-4u col-span-full h-fit rounded-lg md:sticky md:top-[160px] md:col-span-4 xl:col-span-5'>
            <form
              className='gap-3u flex flex-col'
              onSubmit={e => handleSubmit(e, formData, movieId)}>
              {/* user name */}
              <div className='gap-u flex flex-col'>
                <label
                  htmlFor='name'
                  className='font-body-base-bold text-smoke-700 px-3u'>
                  Il tuo nome
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Mario'
                  className='border-smoke-100 px-3u py-2u font-body-base-regular min-h-[48px] rounded-md border bg-white'
                  onChange={handleMultiInput}
                />
              </div>
              {/* vote */}
              <div className='gap-u flex flex-col'>
                <label
                  htmlFor='vote'
                  className='font-body-base-bold text-smoke-700 px-3u'>
                  Voto
                </label>
                <select
                  name='vote'
                  className='border-smoke-100 px-3u py-2u font-body-base-regular min-h-[48px] rounded-md border bg-white'
                  onChange={handleMultiInput}>
                  <option disabled>Scegli un voto</option>
                  <option value='5'>⭐⭐⭐⭐⭐</option>
                  <option value='4'>⭐⭐⭐⭐</option>
                  <option value='3'>⭐⭐⭐</option>
                  <option value='2'>⭐⭐</option>
                  <option value='1'>⭐</option>
                </select>
              </div>
              {/* text */}
              <div className='gap-u flex flex-col'>
                <label
                  htmlFor='text'
                  className='font-body-base-bold text-smoke-700 px-3u'>
                  Testo Recensione
                </label>
                <textarea
                  name='text'
                  placeholder='Film spettacolare!'
                  className='border-smoke-100 px-3u py-2u font-body-base-regular min-h-[120px] rounded-md border bg-white'
                  onChange={handleMultiInput}></textarea>
              </div>
              {/* button */}
              <button
                type='submit'
                className='px-7u py-4u min-h-[48px] w-full self-start rounded-full bg-indigo-600 text-white transition-all hover:cursor-pointer hover:bg-black hover:text-indigo-200 md:w-fit'
                onClick={e => handleSubmit(e, formData, movieId)}>
                Invia Recensione
              </button>
              {/* form result */}
              <p className='font-body-s-default text-smoke-700'>{formResult}</p>
            </form>
          </div>
          {/* reviews list */}
          <div className='gap-3u col-span-full flex flex-col items-center md:col-span-4 xl:col-span-7'>
            {/* reviews average vote */}
            <div className='gap-3u flex w-full flex-wrap items-center self-start'>
              <p className='font-body-l-bold'>Media Voti</p>
              <span className='flex items-center'>
                {reviewStars.map((starStyle, i) => {
                  return i <= average_vote - 1 ? (
                    <Star weight='fill' key={i} color={StarsColorFilled} />
                  ) : (
                    <Star
                      weight={starStyle}
                      key={i}
                      color={StarsColorOutline}
                    />
                  );
                })}
              </span>
              <div className='bg-smoke-50 h-[1px] w-full'></div>
            </div>
            {reviews?.map(review => {
              const { id } = review;
              return <Review content={review} key={id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
