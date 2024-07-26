const title = "Welcome to my Meli Challenge!";

const description =
  "Hello everyone! My name is Brayan Arango, and I am delighted to present to you my development for the Meli challenge. On this occasion, I am aspiring to the role of a Frontend Developer, and I am thrilled to share with you what I have created.";

const instruction = '"Use the search box above to get started"';

const HomePage = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-2 p-5 min-h-[100%]">
      <h1 className="font-bold text-xl md:text-2xl text-center">{title}</h1>
      <img
        src="./images/brayayin.webp"
        alt="El Brayayin"
        className="w-[80%] md:w-full max-w-[450px] h-auto"
      />
      <p className="text-center text-md md:text-lg max-w-[700px] text-gray-dark">
        {description}
      </p>
      <p className="text-center text-sm md:text-md italic font-bold">
        {instruction}
      </p>
    </section>
  );
};

export { HomePage as default };
