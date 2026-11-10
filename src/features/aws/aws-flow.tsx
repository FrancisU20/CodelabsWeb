import { Fragment } from "react";
import Image from "next/image";
import { IMAGES } from "@/content/images";
import { cssVars } from "@/shared/lib/css-vars";
import Icon from "@/shared/ui/icons/svg-icon";
import styles from "./aws.module.css";

const SERVICE_ICON_SIZE = 152;

type AwsFlowProps = {
  ariaLabel: string;
  steps: { label: string; detail: string }[];
};

const AwsFlow = ({ ariaLabel, steps }: AwsFlowProps) => (
  <div className={styles.flow} data-scrub role="img" aria-label={ariaLabel}>
    {steps.map((step, index) => (
      <Fragment key={step.label}>
        {index > 0 && <div className={styles.wire} style={cssVars({ "--i": index - 1 })} />}
        <div className={styles.node} style={cssVars({ "--i": index })}>
          <div className={styles.nodeBox}>
            {index === 0 ? (
              <Icon name="users" />
            ) : (
              <Image src={IMAGES.aws.services[index - 1]} alt="" width={SERVICE_ICON_SIZE} height={SERVICE_ICON_SIZE} />
            )}
          </div>
          <div className={styles.nodeText}>
            <span>{step.label}</span>
            <small>{step.detail}</small>
          </div>
        </div>
      </Fragment>
    ))}
  </div>
);

export default AwsFlow;
