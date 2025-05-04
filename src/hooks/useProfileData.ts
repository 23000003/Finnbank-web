import { useEffect, useState } from "react";
import useActionStatus from "./useActionStatus";
import { AccountService } from "../services/account.service";
import { PersonalData } from "../types/entities/account.entity";

interface InfoCard {
  type: "Emails" | "Phone Numbers" | "Addresses";
  value: string;
}

type InfoCardContent = InfoCard[];

export const useProfileData = (userId: string) => {
  const [profileData, setProfileData] = useState<PersonalData>();
  const [infoCardContent, setInfoCardContent] = useState<InfoCardContent>([]);

  const { setLoading, setErrorMessage, setSuccessMessage, loading } = useActionStatus(true);

  useEffect(() => {
    console.log("Fetching user personal data...");
    const fetchUserPersonalData = async () => {
      try {
        const data = await AccountService.getAccountPersonalData(userId);
        setProfileData(data);
        console.log("User Personal Data:", data);
        setInfoCardContent([
          {
            type: "Emails",
            value: data.email,
          },
          {
            type: "Phone Numbers",
            value: data.phoneNumber,
          },
          {
            type: "Addresses",
            value: data.address,
          },
        ]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user personal data:", err);
        setErrorMessage("Error fetching user personal data");
      }
    };
    setTimeout(() => {
      fetchUserPersonalData();
    }, 2000);
  }, [setErrorMessage, setLoading, setSuccessMessage, userId]);

  return {
    profileData: profileData as PersonalData,
    infoCardContent,
    loading,
  };
};
