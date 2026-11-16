"use client";

import type { Messages } from "@/i18n/messages/messages";
import { useBubbleVisibility } from "./use-bubble-visibility";
import styles from "./whatsapp-button.module.css";

type WhatsAppBubbleProps = {
  copy: Messages["whatsapp"]["bubble"];
  href: string;
};

const WhatsAppBubble = ({ copy, href }: WhatsAppBubbleProps) => {
  const { visible, dismiss } = useBubbleVisibility();

  if (!visible) return null;

  return (
    <div className={styles.bubble} role="status">
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={dismiss}>
        <b>{copy.title}</b>
        <span>{copy.body}</span>
      </a>
      <button type="button" className={styles.dismiss} aria-label={copy.dismiss} onClick={dismiss}>
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
};

export default WhatsAppBubble;
