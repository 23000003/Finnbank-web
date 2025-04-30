import React from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { OpenedAccount } from "../../../types/entities/opened-account.entity";
import { hideAccountNumber } from "../../../utils/hide-account-number";
import {
  OpenedAccountStatusEnum,
  OpenedAccountTypeEnum,
} from "../../../types/enums/opened-account.enum";

type SelectAccountProps = {
  selected: OpenedAccount;
  setSelected: React.Dispatch<React.SetStateAction<OpenedAccount>>;
  accounts: OpenedAccount[];
};

const SelectAccount: React.FC<SelectAccountProps> = ({ selected, setSelected, accounts }) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative">
        {/* Default selected account */}
        <ListboxButton
          as="button"
          className="w-full border border-gray-300 cursor-pointer rounded-lg p-3 pr-10 text-left focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <span className="font-medium">{selected.account_type} Account</span>
              <span className="text-sm text-gray-500">
                {hideAccountNumber(selected.account_number)}
              </span>
            </div>
            <span
              className={`${
                selected.openedaccount_status == OpenedAccountStatusEnum.ACTIVE
                  ? "text-green-500"
                  : "text-red-500"
              } text-sm font-medium`}
            >
              {selected.openedaccount_status}
            </span>
          </div>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </ListboxButton>
        {/* Dropdown choices */}
        <ListboxOptions className="absolute z-10 w-full mt-1 max-h-60 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {accounts.map((account, idx) => {
            if (account.account_type === OpenedAccountTypeEnum.SAVINGS) return null;
            return (
              <ListboxOption
                key={idx}
                value={account}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-4 pr-4 flex flex-row justify-between ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                <div className="flex flex-col">
                  <span className="font-medium">{account.account_type}</span>
                  <span className="text-sm text-gray-500">
                    {hideAccountNumber(account.account_number)}
                  </span>
                </div>
                <div className="flex flex-col w-1/2 items-end">
                  <span
                    className={`${
                      selected.openedaccount_status == OpenedAccountStatusEnum.ACTIVE
                        ? "text-green-500"
                        : "text-red-500"
                    } text-sm font-medium`}
                  >
                    {account.openedaccount_status}
                  </span>
                  <span className="text-sm text-gray-500">{`₱${account.balance.toFixed(2)}`}</span>
                </div>
              </ListboxOption>
            );
          })}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default SelectAccount;
