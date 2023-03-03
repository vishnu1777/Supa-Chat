import { ChatEngine } from "react-chat-engine";
import "./App.css";
import { ChatFeed, LoginForm } from "./components";

const App = () => {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="
  e0817ac1-e410-490c-8896-4a735ffeed67"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
