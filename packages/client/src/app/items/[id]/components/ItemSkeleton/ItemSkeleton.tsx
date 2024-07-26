const ItemSkeleton = () => (
  <div className="animate-pulse flex flex-col gap-5">
    <span className="bg-black/20 h-[14px] w-[50%] rounded" />

    <div className="rounded bg-white flex gap-4  flex-col md:flex-row p-6 pb-10">
      <div className="flex flex-col gap-4 w-full">
        <span className="w-[90%] xs:w-[75%] md:w-full min-w-0 mx-auto bg-black/20 h-[200px] xs:h-[300px] sm:h-[400px] rounded" />
        <span className="bg-black/20 h-[20px] xs:h-[24px] w-[50%] rounded" />
        <span className="bg-black/20 h-[16px] xs:h-[20px] rounded" />
        <span className="bg-black/20 h-[16px] xs:h-[20px] rounded" />
        <span className="bg-black/20 h-[16px] xs:h-[20px] rounded" />
        <span className="bg-black/20 h-[16px] xs:h-[20px] rounded w-[80%]" />
      </div>

      <div className="w-full max-w-[372px] mx-auto mt-10 md:mt-0">
        <div className="py-6 px-4 gap-1 flex flex-col">
          <span className="h-[14px] bg-black/20 rounded w-[60px]" />
          <span className="h-[20px] sm:h-[24px] bg-black/20 rounded" />
          <span className="h-[28px] sm:h-[36ppx] bg-black/20 rounded w-[70%] my-3" />
          <span className="h-[16px] mb-10 mt-2 bg-black/20 rounded w-[100px]" />
          <span className="h-[40px] w-full bg-black/20 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export { ItemSkeleton };
