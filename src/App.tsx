import { Ban } from "lucide-react";

import "./App.css";
import Alert from "./components/ui/Alert/Alert";

function App() {
  return (
    <>
      <Alert
        type="alert-error"
        icon={<Ban />}
        title={"Something Went Wrong"}
        children={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            voluptatem quos. Rem qui repudiandae <a href="/">assumenda hic! </a>{" "}
            Officia nemo exercitationem tempora!
          </p>
        }
      />

      <Alert
        type="alert-warning"
        icon={<Ban />}
        title={"Something Went Wrong"}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, voluptatem quos. Rem qui repudiandae assumenda hic! Officia nemo exercitationem tempora!"
      />

      <Alert
        type="alert-info"
        icon={<Ban />}
        title={"Something Went Wrong"}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, voluptatem quos. Rem qui repudiandae assumenda hic! Officia nemo exercitationem tempora!"
      />

      <Alert
        type="alert-default"
        icon={<Ban />}
        title={"Something Went Wrong"}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, voluptatem quos. Rem qui repudiandae assumenda hic! Officia nemo exercitationem tempora!"
      />

      <Alert
        type="alert-success"
        icon={<Ban />}
        title={"Something Went Wrong"}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, voluptatem quos. Rem qui repudiandae assumenda hic! Officia nemo exercitationem tempora!"
      />
    </>
  );
}

export default App;
