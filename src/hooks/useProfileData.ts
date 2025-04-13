import { useEffect, useState } from "react";
import useActionStatus from "./useActionStatus"
import { AccountService } from "../services/account.service";


export const useProfileData = (userId: number) => {

  const [infoCardContent, setInfoCardContent] = useState<{
    type: 'Emails' | 'Phone Numbers' | 'Addresses';
    value: string;
  }[]>([]);

  const { 
    setLoading, 
    setErrorMessage, 
    setSuccessMessage,
    loading
  } = useActionStatus()
  
  useEffect(() => {
    setLoading(true);
    const fetchUserPersonalData = async () => {
      try{
        const data = await AccountService.getAccountPersonalData(userId);
        console.log('User Personal Data:', data);
        setInfoCardContent([
          {
            type: 'Emails',
            value: data.email
          },
          {
            type: 'Phone Numbers',
            value: data.phoneNumber
          },
          {
            type: 'Addresses',
            value: data.address
          }
        ]);
        setSuccessMessage("Fetch Successful") // to remove
        setLoading(false);
      }catch(err){
        console.error('Error fetching user personal data:', err);
        setErrorMessage("Error fetching user personal data")
      }
    }
    setTimeout(() => {
      fetchUserPersonalData();
    }, 2000)
  }, [])

  return {
    infoCardContent,
    loading,
  }
}