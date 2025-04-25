import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UpdatesList, Update } from "../../components/updates/UpdateList";
import { UpdateDetails } from "../../components/updates/UpdateDetails";
import { MessageCenterNotice } from "../../components/updates/MessengerCenterNotice";

const mockUpdates: Update[] = [
  { id: "1", title: "Upcoming Changes to FinnBank", date: "Jan 15", isRead: false },
  { id: "2", title: "Upcoming Changes to FinnBank", date: "Aug 06", isRead: true },
  { id: "3", title: "Upcoming Changes to FinnBank", date: "Mar 24", isRead: true },
  { id: "4", title: "Upcoming Changes to FinnBank", date: "Dec 08", isRead: true },
];

export const Route = createFileRoute("/home/updates")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedId, setSelectedId] = useState<string>(mockUpdates[0].id);

  const selectedUpdate = mockUpdates.find((u) => u.id === selectedId);

  return (
    <div className="flex min-h-screen text-[#2c2e33] gap-5">
      <div className="flex flex-col w-[450px] px-0 pt-4 pb-0 overflow-y-auto h-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Updates</h1>
        <UpdatesList updates={mockUpdates} selectedId={selectedId} onSelect={setSelectedId} />
        <div className="mt-auto p-4 text-sm text-center text-gray-500">
          <MessageCenterNotice />
        </div>
      </div>
      <div className="w-2/3">
        {selectedUpdate && (
          <UpdateDetails
            sender="K. Maratas"
            title={selectedUpdate.title}
            date={selectedUpdate.date}
            content={`<p>Hello,<br/>We are updating our legal agreements. Visit the <a href="#">Policy Update page</a> to review all changes.</p>. Update brought to you by KentWAR, White Beard, Papa Raul, OppenJayme and Marqt. NIG- WHY DID YOU MAKE ME DO THIS? Your fighting, so you watch everyone around you die, THINK MARK, you'll outlast every fragile, insignificant being on this planet. You'll live to see this world crumble to dust and BLOW AWAY!

Everyone, and everything you know, WILL BE GONE... WHAT WILL YOU HAVE AFTER 500 YEARS? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
          />
        )}
      </div>
    </div>
  );
}
