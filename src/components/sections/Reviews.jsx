import Review from "../Review";

export default function Reviews({ content }) {
  const reviews = content;

  return (
    <>
      {/* reviews */}
      <div className='gap-10u flex w-full max-w-[92%] flex-col items-center md:max-w-[48%]'>
        <h2 className='font-display-3'>Reviews</h2>
        <div className='gap-3u flex w-full flex-col items-center'>
          {reviews?.map(review => {
            const { id } = review;
            return <Review content={review} key={id} />;
          })}
        </div>
      </div>
    </>
  );
}
