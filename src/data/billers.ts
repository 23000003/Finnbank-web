import { Biller } from "../types/entities/billers.entity";

export const Billers: Biller[] = [
  {
    id: 10,
    fee: 10,
    name: "Electric Utilities",
    account_number: "1548625974365215",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 11,
    fee: 5,
    name: "Water Utilities",
    account_number: "4772148923850012",
    icon: "M19 14l-7 7m0 0l-7-7m7 7V3",
  },
  {
    id: 12,
    fee: 15,
    name: "Internet",
    account_number: "3698521470147852",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    id: 13,
    name: "Credit Card",
    account_number: "7412589630258741",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    fee: 20,
  },
  {
    id: 14,
    name: "Loans",
    account_number: "9517538520147896",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    fee: 25,
  },
  {
    id: 15,
    name: "Insurance",
    account_number: "8529637410258963",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    fee: 30,
  },
];
