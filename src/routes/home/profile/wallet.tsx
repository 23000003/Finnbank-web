import { createFileRoute } from "@tanstack/react-router";
import WalletCards from "../../../components/profile/WalletCards";
import WalletCardInfo from "../../../components/profile/WalletCardInfo";

export const Route = createFileRoute("/home/profile/wallet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-row justify-center mt-10">
      <WalletCards />
      <WalletCardInfo />
    </div>
  );
}
