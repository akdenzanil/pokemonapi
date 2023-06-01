"use client";
import CardItem from "@/components/CardItem";
import { useEffect, useState } from "react";
import PokemonService from "@/service/pokemon";
import * as S from "./style";
import Pagination from "@/components/Pagination";
import { paginate } from "@/components/Pagination/paginate";

export default function Home() {

  const [listData, setListData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = Number(process.env.NEXT_PUBLIC_SHOW_PER_PAGE);
  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    PokemonService.getPokemonList().then((data) => {
      setListData(data.results);
    });
  }, []);

  const paginatedPosts = paginate(listData, currentPage, pageSize);

  return (
    <main className={`container`}>
      <S.cardWrapper >
        {paginatedPosts?.length > 0 &&
          paginatedPosts.map((item:any, index:any) => (
            <CardItem key={index} name={item?.name} img={`poke.png`} />
          ))}
      </S.cardWrapper>
      <Pagination
        items={listData.length} 
        currentPage={currentPage} 
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </main >
  );
}


