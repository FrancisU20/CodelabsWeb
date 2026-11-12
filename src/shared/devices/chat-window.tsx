import { joinClassNames } from "@/shared/lib/class-names";
import styles from "./chat.module.css";

type ChatWindowProps = {
  name: string;
  initial: string;
  status: string;
  messages: { from: "customer" | "assistant"; text: string }[];
  typing?: boolean;
  className?: string;
};

const ChatWindow = ({ name, initial, status, messages, typing = false, className }: ChatWindowProps) => (
  <div className={joinClassNames(styles.chat, className)}>
    <div className={styles.head}>
      <i aria-hidden="true">{initial}</i>
      <div>
        <b>{name}</b>
        <small>{status}</small>
      </div>
    </div>
    <div className={styles.body}>
      {messages.map((message) => (
        <p key={message.text} className={joinClassNames(styles.message, message.from === "customer" && styles.customer)}>
          {message.text}
        </p>
      ))}
      {typing && (
        <span className={joinClassNames(styles.message, styles.typing)} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      )}
    </div>
  </div>
);

export default ChatWindow;
