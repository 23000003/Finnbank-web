import { createFileRoute } from "@tanstack/react-router";
import ProfileCard from "../../../components/profile/ProfileCard";
import AccountInformation from "../../../components/profile/AccountInformation";
import InfoCard from "../../../components/profile/InfoCard";
import { useProfileData } from "../../../hooks/useProfileData";
import { useAuth } from "../../../contexts/AuthContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { UpdateInfoForm } from "../../../components/profile/ChangeAccountDetails";
import { AccountService } from "../../../services/account.service";
import { showToast } from "../../../utils/toast";
import { UpdateUserForm } from "../../../components/profile/UpdateAccount";
import {
  AccountInfoLoading,
  InfoCardLoading,
  ProfileCardLoading,
} from "../../../components/loading/ProfileLoading";

export const Route = createFileRoute("/home/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = useAuth();
  const { infoCardContent, loading, profileData } = useProfileData(userId as string);
  const [editingInfo, setEditingInfo] = useState<{
    type: "Emails" | "Phone Numbers" | "Addresses";
    value: string;
  } | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = async (
    type: "Emails" | "Phone Numbers" | "Addresses",
    updatedValue: string
  ) => {
    console.log(`Updating ${type} with value: ${updatedValue}`);
    try {
      const backendType = {
        Emails: "Email",
        "Phone Numbers": "Phone",
        Addresses: "Address",
      }[type] as "Email" | "Phone" | "Address";

      await AccountService.updateUserDetails(userId as string, backendType, updatedValue);
      console.log(`Successfully updated ${type} to ${updatedValue}`);
      showToast.success("Update Sucessfull");
      setEditingInfo(null);
    } catch (err) {
      console.error("Error updating user details:", err);
      showToast.error("Update Failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-20 justify-center items-center md:items-start">
      <div className="max-w-[500px] w-full">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? (
            <>
              <ProfileCardLoading />
              <AccountInfoLoading />
            </>
          ) : (
            <>
              <ProfileCard
                fullName={profileData.fullName}
                dateCreated={profileData.dateCreated}
                accountStatus={profileData.accountStatus}
                onEdit={() => setIsEditing(true)}
              />
              <AccountInformation
                nationalIdNumber={profileData.nationalIdNumber}
                accountNumber={profileData.accountNumber}
                nationality={profileData.nationality}
                accountStatus={profileData.accountStatus}
                accountType={profileData.accountType}
                birthdate={profileData.birthDate}
              />
            </>
          )}
        </motion.div>
      </div>
      <div className="max-w-[500px] md:max-w-[400px] w-full">
        <motion.div
          className="flex flex-col gap-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {loading ? (
            <InfoCardLoading />
          ) : (
            infoCardContent.map((info, index) => (
              <InfoCard
                key={index}
                type={info.type as "Emails" | "Phone Numbers" | "Addresses"}
                value={info.value}
                onEdit={(type, value) => setEditingInfo({ type, value })}
              />
            ))
          )}
        </motion.div>
      </div>
      {editingInfo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <UpdateInfoForm
            type={editingInfo.type}
            value={editingInfo.value}
            onUpdate={handleUpdate}
            onClose={() => setEditingInfo(null)}
          />
        </div>
      )}
      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <UpdateUserForm
            userID={userId as string}
            firstName={profileData.firstName}
            middleName={profileData.middleName}
            lastName={profileData.lastName}
            email={profileData.email}
            phone={profileData.phoneNumber}
            address={profileData.address}
            onClose={() => setIsEditing(false)}
          />
        </div>
      )}
    </div>
  );
}
