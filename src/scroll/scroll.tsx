import React, {
  FC,
  Fragment,
  useEffect,
  useState,
  useCallback,
  RefObject,
} from "react";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";
import fetcher from "../fetcher";
import { Middlebox, Mbox, Container } from "./styles";
import Content from "../Content";
import { copyFileSync } from "fs";

const key = process.env.REACT_APP_SERVICE_KEY;

const Scroll: FC = () => {
  const getKey = (pageIndex: number, previousPageData: any) => {
    console.log(pageIndex, previousPageData);
    if (pageIndex && !previousPageData.length) return null;
    return `api/15045548/v1/uddi:4d020ca4-8fa2-4d62-9e95-b2f282a4079a?serviceKey=${key}&page=${pageIndex}&returnType=JSON`;
  };
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  const products = data ? data[0].map((e: any) => e) : [];

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      console.log("감지");
      setSize((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Middlebox>
        {products.map((e: String, index: number) => {
          return <Content data={e} key={index} />;
        })}
      </Middlebox>
    </Container>
  );
};

export default Scroll;
