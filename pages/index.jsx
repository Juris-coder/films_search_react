import * as React from "react";

import { BaseLayout } from "../layouts";
import { Modal } from "../components";

const HomePageMemo = (props) => {
  return (
    <BaseLayout>
     
      <Modal />

    </BaseLayout>
      
  );
};

export const HomePage = React.memo(HomePageMemo);

export default HomePage;
