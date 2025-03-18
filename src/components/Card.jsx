export default function Card({ content }) {
  const { title, genre } = content;

  return (
    <>
      <div>
        <h3>{title}</h3>
        <p>{genre}</p>
      </div>
    </>
  );
}
