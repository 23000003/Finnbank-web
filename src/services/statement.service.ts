// // Activity route

// import { ActivityData } from "../types/entities/activity.entities";
// import { api } from "../configs/axios";

// export default class StatementService {
//   static async getAllStatements(userId: string) {
//     try {
//       console.log(userId);
//       const data = await api.get<{ data: ActivityData[] }>(
//         `/transaction/get-all/${userId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//           },
//         }
//       ).then((res) => res.data.data);
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.error("Error fetching statements:", error);
//       throw new Error("Failed to fetch statements");
//     }
//   }
// }
