type ProfileCardProps = {
  fullName: string;
  dateCreated: string;
  accountStatus: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ fullName, dateCreated, accountStatus }) => {
  return (
    <div className="flex flex-col">
      {/* PFP */}
      <div className="flex flex-row justify-between bg-blue-600 h-32 p-4 rounded-t-lg">
        <span className="text-white text-xs">Profile</span>
        <span className="text-white text-xs">Joined in {dateCreated}</span>
      </div>
      {/* Profile dets */}
      <div className="flex flex-col justify-between bg-white p-4 gap-4 rounded-b-lg">
        <div className="flex items-center">
          <div className="bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center text-white text-xl -mt-16">
            <p>K</p>
            {/* <span className='absolute mt-8'>Edit</span> */}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg">{fullName}</span>
          <span className="text-xs font-semibold text-green-600">{accountStatus}</span>
        </div>
        <span className="text-xs font-semibold text-blue-600">Edit personal information</span>
      </div>
    </div>
  );
};

export default ProfileCard;
