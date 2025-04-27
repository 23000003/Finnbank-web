import { createFileRoute } from "@tanstack/react-router";
import ProfileCard from "../../../components/profile/ProfileCard";
import AccountInformation from "../../../components/profile/AccountInformation";
import InfoCard from "../../../components/profile/InfoCard";
import { useProfileData } from "../../../hooks/useProfileData";
import { useAuth } from "../../../contexts/AuthContext";
import { motion } from "framer-motion";

export const Route = createFileRoute("/home/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = useAuth();
  const { infoCardContent, loading, profileData } = useProfileData(userId as string);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full gap-20 justify-center items-center md:items-start">
      <div className="max-w-[500px] w-full">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ProfileCard
            fullName={profileData.fullName}
            dateCreated={profileData.dateCreated}
            accountStatus={profileData.accountStatus}
          />
          <AccountInformation
            nationalIdNumber={profileData.nationalIdNumber}
            accountNumber={profileData.accountNumber}
            nationality={profileData.nationality}
            accountStatus={profileData.accountStatus}
            accountType={profileData.accountType}
            birthdate={profileData.birthDate}
          />
        </motion.div>
      </div>
      <div className="max-w-[500px] md:max-w-[400px] w-full">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {infoCardContent.map((info, index) => (
            <InfoCard
              key={index}
              type={info.type as "Emails" | "Phone Numbers" | "Addresses"}
              value={info.value}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
