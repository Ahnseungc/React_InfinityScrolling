import React, { FC, Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "./fetcher";

const key = process.env.REACT_APP_SERVICE_KEY;
// http://api.odcloud.kr/api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${SERVICE_KEY}&page=1&perPage=10

// api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${key}&page=1&perPage=10&returnType=JSON

const url = `api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${key}&page=1&perPage=10&returnType=JSON`;

const Scroll: FC = () => {
  const [infos, setInfos] = useState([]);
  const { data: memberData } = useSWR<any>(url, fetcher);
  useEffect(() => {
    setInfos(memberData);
  }, [memberData]);

  return (
    <Fragment>
      {infos?.map((e) => {
        return <p>{Object.values(e)}</p>;
      })}
    </Fragment>
  );
};

export default Scroll;
