import { Skeleton } from "./skeleton";

export default function DasboardLoading() {
  return (
    <>
      <div
        className="bg-white p-6 rounded-lg shadow-md transition-transform w-full
          transform hover:scale-102 hover:shadow-lg hover:bg-gray-100 duration-300 h-[196px]"
      >
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
      </div>
      <div
        className="bg-white p-6 rounded-lg shadow-md transition-transform w-full
          transform hover:scale-102 hover:shadow-lg hover:bg-gray-100 duration-300 h-[196px]"
      >
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
      </div>
      <div
        className="bg-white p-6 rounded-lg shadow-md transition-transform w-full
          transform hover:scale-102 hover:shadow-lg hover:bg-gray-100 duration-300 h-[196px]"
      >
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
        <Skeleton className="h-10 w-full mb-2" />
      </div>
    </>
  );
}
