export default function Heading(e) {
  return (
    <>
      <div className="md:ml-40 md:py-6 md:px-0 px-6 heading">
        <h1 className="text-4xl font-bold mb-4">{e.heading}</h1>
        <p className="text-black opacity-50">{e.subHeading}</p>
      </div>
    </>
  );
}
