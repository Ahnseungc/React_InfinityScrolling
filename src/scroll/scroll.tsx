import React, {
  FC,
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import useSWRInfinite from "swr";
import fetcher from "../fetcher";
import { Highbox, Middlebox, Mbox, Container } from "./styles";
import { info } from "console";
import Scrollbars from "react-custom-scrollbars";

const key = process.env.REACT_APP_SERVICE_KEY;
// http://api.odcloud.kr/api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${SERVICE_KEY}&page=1&perPage=10

// api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${key}&page=1&perPage=10&returnType=JSON

const Scroll: FC = () => {
  const [infos, setInfos] = useState([]);
  const scrollRef = useRef(null);
  const { data: memberData } = useSWRInfinite<any>(
    (index: number) =>
      `api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${key}&page=${
        index + 1
      }&perPage=10&returnType=JSON`,
    fetcher
  );
  const isEmpty = memberData?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (memberData && memberData[memberData.length - 1]?.length < 20);

  useEffect(() => {
    setInfos(memberData);
  }, [memberData]);

  const onScroll = useCallback((val: any) => {
    if (val.scrollTop === 0 && !isReachingEnd) {
      console.log("가장 위");
      // setSize((prev:number)=>prev+1).then(
      //   ()=>{

      //   }
      // );
    }
  }, []);

  return memberData ? (
    <Container>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
        <Highbox>
          {infos?.map((e) => {
            return (
              <Middlebox>
                {Object.keys(e).map((key) => (
                  <p>
                    {key} : {e[key]}
                  </p>
                ))}
                <Mbox>꽃사진</Mbox>
              </Middlebox>
            );
          })}
        </Highbox>
      </Scrollbars>
    </Container>
  ) : null;
};

export default Scroll;
