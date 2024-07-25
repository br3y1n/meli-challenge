const title = "Welcome to my Meli Challenge!";

const description =
  "Hello everyone! My name is Brayan Arango, and I am delighted to present to you my development for the Meli challenge. On this occasion, I am aspiring to the role of a Frontend Developer, and I am thrilled to share with you what I have created.";

const instruction = '"Use the search box above to get started"';

const HomePage = () => (
  <section className="w-full flex flex-col justify-center items-center gap-2 p-5 min-h-[100%]">
    <h1 className="font-bold text-[24px] md:text-[28px] text-center">
      {title}
    </h1>

    <img
      src="./images/brayayin.webp"
      alt="El Brayayin"
      className="w-[80%] md:w-full max-w-[450px] h-auto"
    />

    <p className="text-center text-[16px] md:text-[20px] max-w-[700px]">
      {description}
    </p>

    <p className="text-center text-[14px] md:text-[16px] italic">
      {instruction}
    </p>
  </section>
);

export { HomePage as default };
