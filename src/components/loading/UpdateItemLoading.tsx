import { Skeleton } from "./skeleton";

export default function UpdateItemLoading() {
  return (
    <div>
      <Skeleton className="h-[98px] w-full mb-2" />
      <Skeleton className="h-[98px] w-full mb-2" />
      <Skeleton className="h-[98px] w-full mb-2" />
    </div>
  );
}
