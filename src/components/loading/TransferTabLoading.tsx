import { Skeleton } from "./skeleton";

export function AccountSelectionLoading() {
  return (
    <div>
      <Skeleton className="h-[110px] w-full mb-4" />
      <Skeleton className="h-[110px] w-full" />
    </div>
  );
}

export function RecentlySentLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="h-[54px] w-full" />
      <Skeleton className="h-[54px] w-full" />
    </div>
  );
}
