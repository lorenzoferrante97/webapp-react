import Review from "../Review";

export default function Reviews({ content }) {
  const reviews = content;

  return (
    <>
      {/* reviews */}
      <div className='gap-10u flex w-full max-w-[92%] flex-col items-center md:max-w-[80%]'>
        <h2 className='font-display-3'>Reviews</h2>
        <div className='row-grid relative w-full'>
          {/* reviews form */}
          <div className='bg-smoke-50 p-4u col-span-full h-fit rounded-lg md:sticky md:top-[160px] md:col-span-4 xl:col-span-5'>
            <form className='gap-3u flex flex-col'>
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
                  className='border-smoke-100 px-3u py-2u font-body-base-regular min-h-[48px] rounded-md border bg-white'>
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
                  className='border-smoke-100 px-3u py-2u font-body-base-regular min-h-[48px] min-h-[120px] rounded-md border bg-white'></textarea>
              </div>
            </form>
          </div>
          {/* reviews list */}
          <div className='gap-3u col-span-full flex flex-col items-center md:col-span-4 xl:col-span-7'>
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
