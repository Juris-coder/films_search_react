import * as React from "react";
import { Footer, Input } from "../../components";
import styles from "./styles.module.scss";

const BaseLayoutMemo= (props) => {
  const { children } = props;

  return (
    <div>
      <Input />
      {children}
      <Footer />
    </div>
  );
};

export const BaseLayout = React.memo(BaseLayoutMemo);

export default BaseLayout;
