import { createFileRoute } from "@tanstack/react-router";
import ProfileCard from "../../../components/profile/ProfileCard";
import AccountOptions from "../../../components/profile/AccountOptions";
import InfoCard from "../../../components/profile/InfoCard";
import { useProfileData } from "../../../hooks/useProfileData";
import { useAuth } from "../../../contexts/AuthContext";

export const Route = createFileRoute("/home/profile/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { userId } = useAuth();
  const { infoCardContent, loading } = useProfileData(userId as number);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <span className="text-lg font-semibold">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2">
        <div className="flex flex-col mx-24 gap-8">
          <ProfileCard />
          <AccountOptions />
        </div>
      </div>
      <div className="w-1/2">
        <div className="flex flex-col mx-24 gap-8">
          {infoCardContent.map((info, index) => (
            <InfoCard
              key={index}
              type={info.type as "Emails" | "Phone Numbers" | "Addresses"}
              value={info.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
