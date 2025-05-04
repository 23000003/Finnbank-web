import { Skeleton } from "./skeleton";

export default function ActivityTableLoading() {
  return (
    <>
      <tr>
        <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
          <Skeleton className="h-8 w-full mx-auto" />
        </td>
      </tr>
      <tr>
        <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
          <Skeleton className="h-8 w-full mx-auto" />
        </td>
      </tr>
      <tr>
        <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
          <Skeleton className="h-8 w-full mx-auto" />
        </td>
      </tr>
      <tr>
        <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
          <Skeleton className="h-8 w-full mx-auto" />
        </td>
      </tr>
      <tr>
        <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
          <Skeleton className="h-8 w-full mx-auto" />
        </td>
      </tr>
    </>
  );
}
