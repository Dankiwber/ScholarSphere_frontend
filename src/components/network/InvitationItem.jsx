import React from "react";

const InvitationItem = ({ invitation, onAccept, onIgnore }) => {
  return (
    <li className="py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="h-14 w-14 rounded-full"
          src={
            invitation.avatar ||
            `https://placehold.co/128x128/dbeafe/1e3a8a?text=${invitation.name.charAt(
              0
            )}`
          }
          alt={invitation.name}
        />
        <div>
          <p className="font-semibold text-gray-800 text-lg">
            {invitation.name}
          </p>
          <p className="text-sm text-gray-500">
            {invitation.title}, {invitation.institution}
          </p>
          <p className="text-sm text-gray-500 mt-1">{invitation.message}</p>
        </div>
      </div>
      <div className="flex space-x-2 flex-shrink-0">
        <button
          onClick={() => onIgnore(invitation.id)}
          className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Ignore
        </button>
        <button
          onClick={() => onAccept(invitation.id)}
          className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
        >
          Accept
        </button>
      </div>
    </li>
  );
};

export default InvitationItem;
