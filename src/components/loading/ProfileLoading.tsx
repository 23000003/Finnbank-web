import { Skeleton } from "./skeleton";

export function AccountInfoLoading() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Account Options</h1>
      <div className="flex flex-col bg-white p-4 rounded-lg gap-4">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-[56px] w-full" />
          <Skeleton className="h-[56px] w-full" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[16px] w-20" />
              <Skeleton className="h-[20px] w-30" />
            </div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[16px] w-20" />
              <Skeleton className="h-[20px] w-30" />
            </div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[16px] w-20" />
              <Skeleton className="h-[20px] w-30" />
            </div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[16px] w-20" />
              <Skeleton className="h-[20px] w-30" />
            </div>
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[16px] w-20" />
              <Skeleton className="h-[20px] w-30" />
            </div>
          </div>
          <Skeleton className="h-[45px] w-full mt-1" />
        </div>
      </div>
    </div>
  );
}

export function InfoCardLoading() {
  const types = ["Emails", "Phone Numbers", "Addresses"] as const;
  return (
    <>
      {types.map((type) => (
        <div key={type} className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl font-semibold">{type}</h1>
          </div>
          <div className="flex flex-col bg-white p-4 rounded-lg mt-4 gap-4">
            <Skeleton className="h-[26px] w-full" />
            <Skeleton className="h-[26px] w-full" />
          </div>
        </div>
      ))}
    </>
  );
}

export function ProfileCardLoading() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between bg-blue-600 h-32 p-4 rounded-t-lg">
        <span className="text-white text-xs">Profile</span>
        <span className="text-white text-xs">Joined in ??/??/????</span>
      </div>
      <div className="flex flex-col justify-between bg-white p-4 gap-4 rounded-b-lg">
        <div className="flex items-center -mt-16">
          <Skeleton className="h-[80px] w-[80px] rounded-full" />
        </div>
        <div className="flex flex-row justify-between items-center">
          <Skeleton className="h-[20px] w-[200px]" />
          <Skeleton className="h-[20px] w-[50px]" />
        </div>
        <button className="text-xs font-semibold text-blue-600 hover:text-blue-300 focus:outline-none mr-auto">
          Edit personal information
        </button>
      </div>
    </div>
  );
}
