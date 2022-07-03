import React from "react";

import { Image } from "semantic-ui-react";
const Spinner = () => {
  return (
    <div className="loader-div">
      <Image
        className="loader"
        src="https://job.vidzzy.com/wp-content/themes/jobhunt/images/loader.gif"
      />
    </div>
  );
};

export default Spinner;
