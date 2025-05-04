import { Skeleton } from "./skeleton";
export default function BillerLoading() {
  return (
    <div className="bg-white p-14 rounded-lg shadow-md w-full max-w-2xl mx-auto flex flex-col gap-6 h-[652px]">
      <div className="flex flex-row justify-between items-center mb-4 w-full">
        <div className="flex flex-col h-full w-full gap-4">
          <Skeleton className="h-[44px] w-[170px] " />
          <Skeleton className="h-[10px] w-[76px]" />
        </div>
        <Skeleton className="h-[44px] w-[48px] rounded-3xl mb-4" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <Skeleton className="h-[10px] w-[96px]" />
        <Skeleton className="h-[54px] w-full" />
      </div>
      <div className="flex flex-row justify-between items-center gap-4">
        <div className="flex flex-col w-full gap-2">
          <Skeleton className="h-[10px] w-[96px]" />
          <Skeleton className="h-[50px] w-full" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <Skeleton className="h-[10px] w-[96px]" />
          <Skeleton className="h-[50px] w-full" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2">
        <Skeleton className="h-[10px] w-[96px]" />
        <Skeleton className="h-[50px] w-full" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <Skeleton className="h-[10px] w-[96px]" />
        <Skeleton className="h-[50px] w-full" />
      </div>
      <Skeleton className="h-[50px] w-full" />
    </div>
  );
}
