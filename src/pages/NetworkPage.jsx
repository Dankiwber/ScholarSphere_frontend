import React, { useState } from "react";
import InvitationItem from "../components/network/InvitationItem";

const NetworkPage = () => {
  const [invitations, setInvitations] = useState([
    {
      id: 1,
      name: "Jing Li",
      title: "Assistant Professor",
      institution: "Tsinghua University",
      message: "Wants to connect with you.",
      avatar: "https://placehold.co/128x128/dbeafe/1e3a8a?text=L",
    },
    {
      id: 2,
      name: "Yejin Choi",
      title: "Professor",
      institution: "University of Washington",
      message: "Wants to connect with you.",
      avatar: "https://placehold.co/128x128/fefce8/854d0e?text=YC",
    },
    {
      id: 3,
      name: "David Patterson",
      title: "Professor",
      institution: "UC Berkeley",
      message: "Wants to connect with you.",
      avatar: "https://placehold.co/128x128/ecfdf5/047857?text=DP",
    },
  ]);

  const handleAccept = (invitationId) => {
    setInvitations(invitations.filter((inv) => inv.id !== invitationId));
    console.log("Accepted invitation:", invitationId);
  };

  const handleIgnore = (invitationId) => {
    setInvitations(invitations.filter((inv) => inv.id !== invitationId));
    console.log("Ignored invitation:", invitationId);
  };

  return (
    <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          All Invitations ({invitations.length})
        </h1>
        <ul className="divide-y divide-gray-200">
          {invitations.map((invitation) => (
            <InvitationItem
              key={invitation.id}
              invitation={invitation}
              onAccept={handleAccept}
              onIgnore={handleIgnore}
            />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default NetworkPage;
