const ItemsSkeleton = () => (
  <>
    <div className="flex justify-between gap-2 flex-col sm:flex-row">
      <span className="bg-black/20 h-[14px] w-[50%] rounded" />

      <div className="flex justify-end">
        <span className="h-[30px] w-[120px] bg-black/20 rounded" />
      </div>
    </div>

    <ol className="rounded bg-white flex flex-col gap-2">
      {Array.from({ length: 4 }, (_, idx) => (
        <li
          className="min-h-[205px] flex py-6 px-4 border-b border-gray-100 gap-6 sm:flex-row flex-col items-center sm:items-stretch"
          key={idx}
        >
          <span className=" h-[160px] w-[160px] bg-black/20 rounded" />

          <div className="flex flex-col gap-3 w-full">
            <span className="h-[20px] w-[80%] bg-black/20 rounded" />
            <span className="h-[24px] w-[100px] bg-black/20 rounded" />
            <span className="h-[16px] w-[60px] bg-black/20 rounded" />
          </div>
        </li>
      ))}
    </ol>

    <div className="flex justify-center gap-8 items-center flex-wrap">
      <span className="h-[50px] w-[50%] bg-black/20 rounded" />
      <span className="h-[35px] w-[50px] bg-black/20 rounded" />
    </div>
  </>
);

export { ItemsSkeleton };
