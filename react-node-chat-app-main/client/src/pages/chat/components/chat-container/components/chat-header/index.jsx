import { RiCloseFill } from "react-icons/ri";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useAppStore } from "@/store";
import { HOST } from "@/lib/constants";
import { getColor } from "@/lib/utils";
import VideoCall from "@/components/ui/VideoCall";
import { useNavigate } from "react-router-dom";
import Background from "/Web Dev Projects/ChatMingle/react-node-chat-app-main/client/src/assets/video-calling-BtYxmS4a.png"
const ChatHeader = () => {
  const { selectedChatData, closeChat, selectedChatType } = useAppStore();

  const navigate = useNavigate();

  const handleVideoCallClick = () => {
    // Navigate to the video call page
    navigate('/video-call');
  };


  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20">
      <button onClick={handleVideoCallClick} className="btn btn-primary">
        <img src={Background} alt="hh" className="h-[50px]"/>
      </button>
      <div className="flex gap-5 items-center">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-12 h-12 relative flex items-center justify-center">
            {selectedChatType === "contact" ? (
              <Avatar className="w-12 h-12 rounded-full overflow-hidden">
                {selectedChatData.image ? (
                  <AvatarImage
                    src={`${HOST}/${selectedChatData.image}`}
                    alt="profile"
                    className="object-cover w-full h-full bg-black rounded-full"
                  />
                ) : (
                  <div
                    className={`uppercase w-12 h-12 text-lg   border-[1px] ${getColor(
                      selectedChatData.color
                    )} flex items-center justify-center rounded-full`}
                  >
                    {selectedChatData.firstName
                      ? selectedChatData.firstName.split("").shift()
                      : selectedChatData.email.split("").shift()}
                  </div>
                )}
              </Avatar>
            ) : (
              <div
                className={` bg-[#ffffff22] py-3 px-5 flex items-center justify-center rounded-full`}
              >
                #
              </div>
            )}
          </div>
          <div>
            {selectedChatType === "channel" && selectedChatData.name}
            {selectedChatType === "contact" &&
              selectedChatData.firstName &&
              selectedChatData.lastName
              ? `${selectedChatData.firstName} ${selectedChatData.lastName}`
              : ""}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          className="text-neutral-300 focus:border-none focus:outline-none focus:text-white transition-all duration-300"
          onClick={closeChat}
        >
          <RiCloseFill className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
