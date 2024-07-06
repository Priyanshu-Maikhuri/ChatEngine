import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background" style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="45c2ba49-f957-42d7-bcc9-143dd1dbf108"
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
