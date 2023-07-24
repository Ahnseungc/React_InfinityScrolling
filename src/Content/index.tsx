import React, { FC } from "react";
import { Middlebox, Mbox } from "./styles";

interface Props {
  data: String;
  key: number;
}

const Content: FC<Props> = ({ data, key }) => {
  return (
    <Middlebox key={key}>
      {Object.keys(data).map((e, index) => (
        <p>
          {e} : {Object.values(data)[index]}
        </p>
      ))}
      <Mbox>꽃사진</Mbox>
    </Middlebox>
  );
};

// export default Content

export default Content;
