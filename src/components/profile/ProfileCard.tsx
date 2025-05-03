import { AccountStatusEnum } from "../../types/enums/account.enum";

type ProfileCardProps = {
  fullName: string;
  dateCreated: string;
  accountStatus: AccountStatusEnum;
  onEdit: () => void;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  fullName,
  dateCreated,
  accountStatus,
  onEdit,
}) => {
  return (
    <div className="flex flex-col">
      {/* PFP */}
      <div className="flex flex-row justify-between bg-blue-600 h-32 p-4 rounded-t-lg">
        <span className="text-white text-xs">Profile</span>
        <span className="text-white text-xs">
          Joined in {new Date(dateCreated).toLocaleDateString()}
        </span>
      </div>
      {/* Profile dets */}
      <div className="flex flex-col justify-between bg-white p-4 gap-4 rounded-b-lg">
        <div className="flex items-center">
          <div className="bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center text-white text-xl -mt-16">
            <p>{fullName[0]}</p>
            {/* <span className='absolute mt-8'>Edit</span> */}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg">{fullName}</span>
          {accountStatus === AccountStatusEnum.ACTIVE ? (
            <span className="text-green-500 text-xs font-semibold">{accountStatus}</span>
          ) : (
            <span className="text-red-500 text-xs font-semibold">{accountStatus}</span>
          )}
        </div>
        <button
          className="text-xs font-semibold text-blue-600 hover:text-blue-300 focus:outline-none mr-auto"
          onClick={onEdit}
        >
          Edit personal information
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
