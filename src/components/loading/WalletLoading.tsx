import { Skeleton } from "./skeleton";

export function WalletCardLoading() {
  return (
    <div className="flex flex-col gap-6 px-6 py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center lg:text-start">
        Wallet Accounts
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-center gap-4 bg-white p-4 rounded-lg shadow-md h-[84px]">
          <div className="flex flex-row gap-6 items-center w-full px-2">
            <Skeleton className="w-18 h-10" />
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 bg-white p-4 rounded-lg shadow-md h-[84px]">
          <div className="flex flex-row gap-6 items-center w-full px-2">
            <Skeleton className="w-18 h-10" />
            <div className="flex flex-col gap-2 w-full">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WalletCardInfoLoading() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl sticky top-10">
      <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
        <div className="w-full max-w-sm cursor-pointer">
          <Skeleton className="w-full h-[242px]" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[150px] h-6" />
          <Skeleton className="w-[250px] h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[150px] h-4" />
          <Skeleton className="w-[100px] h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[150px] h-4" />
          <Skeleton className="w-[100px] h-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[150px] h-4" />
          <Skeleton className="w-[100px] h-4" />
        </div>
        <div className="flex flex-col gap-4">
          <Skeleton className="w-full h-10 mt-4" />
          <Skeleton className="w-full h-14" />
        </div>
      </div>
    </div>
  );
}
