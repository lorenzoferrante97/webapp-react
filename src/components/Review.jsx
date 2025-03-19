import { Star } from "@phosphor-icons/react";

export default function Review({ content }) {
  const review = content;
  const { id, name, vote, text } = review;

  const reviewStars = ["regular", "regular", "regular", "regular", "regular"];
  const StarsColorFilled = "#FFD230";
  const StarsColorOutline = "#FFB900";

  return (
    <>
      <div
        key={id}
        className='gap-2u p-4u border-smoke-100 flex w-full flex-col rounded-lg border'>
        <p className='font-body-l-bold text-smoke-950'>{name}</p>
        {/* stars */}
        <div className='gap-u flex items-center'>
          {reviewStars.map((starStyle, i) => {
            return i <= vote - 1 ? (
              <Star weight='fill' key={i} color={StarsColorFilled} />
            ) : (
              <Star weight={starStyle} key={i} color={StarsColorOutline} />
            );
          })}
        </div>
        <p className='font-body-l-regular text-smoke-700'>
          <span className='text-smoke-300'>"</span>
          {text}
          <span className='text-smoke-300'>"</span>
        </p>
      </div>
    </>
  );
}
