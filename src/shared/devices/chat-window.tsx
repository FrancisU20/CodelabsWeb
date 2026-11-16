import { joinClassNames } from "@/shared/lib/class-names";
import type { IconName } from "@/shared/ui/icons/icon-name";
import Icon from "@/shared/ui/icons/svg-icon";
import type { ChatChannel } from "./chat-channel";
import styles from "./chat.module.css";

const CHANNEL_ICONS: Record<ChatChannel, IconName> = {
  whatsapp: "whatsapp",
  messenger: "messenger",
  web: "globe",
};

type ChatWindowProps = {
  name: string;
  initial: string;
  status: string;
  messages: { from: "customer" | "assistant"; text: string }[];
  channel?: ChatChannel;
  typing?: boolean;
  className?: string;
};

const ChatWindow = ({ name, initial, status, messages, channel = "whatsapp", typing = false, className }: ChatWindowProps) => (
  <div className={joinClassNames(styles.chat, styles[channel], className)}>
    <div className={styles.head}>
      <i aria-hidden="true">{initial}</i>
      <div>
        <b>{name}</b>
        <small>{status}</small>
      </div>
      <Icon name={CHANNEL_ICONS[channel]} className={styles.channel} />
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
