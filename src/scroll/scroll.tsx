import React, {
  FC,
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
  RefObject,
} from "react";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";
import fetcher from "../fetcher";
import { Middlebox, Mbox, Container } from "./styles";
import Content from "../Content";

const key = process.env.REACT_APP_SERVICE_KEY;

const Scroll: FC = () => {
  const [afterdata, setAfterdata] = useState([]);
  const { data: memberData } = useSWR<any>(
    () =>
      `api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${key}&page=1$&perPage=10&returnType=JSON`,
    fetcher
  );

  useEffect(() => {
    if (memberData) {
      setAfterdata(memberData);
    }
  }, [memberData]);

  //무한 스크롤링
  let options = {
    root: null, //타켓 요소가 "어디에" 들어왔을때 콜백함수를 실행할 것인지 결정합니다. null이면 viewport가 root로 지정됩니다
    rootMargin: "0px", //root에 마진값을 주어 범위를 확장 할 수 있습니다.
    threshold: 1.0, //타겟 요소가 얼마나 들어왔을때 백함수를 실행할 것인지 결정합니다. 1이면 타겟 요소 전체가 들어와야 합니다.
  };

  //관측시 실행할 콜백함수입니다.

  let callback = () => {
    console.log("관측되었습니다");
  };
  let observer = new IntersectionObserver(callback, options);
  let target = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    // observer.observe(target.current);
  }, []);

  return (
    <Container ref={callback}>
      <Middlebox>
        {afterdata.map((e, index) => {
          return <Content data={e} key={index} />;
        })}
      </Middlebox>
    </Container>
  );
};

export default Scroll;
