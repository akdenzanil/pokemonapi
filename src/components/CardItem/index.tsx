"use client";
import React from "react";
import * as S from "./style";
import Link from "next/link";

interface ICardItem {
  key:number,
  name: string,
  img:string,
}

function CardItem({ name,img }: ICardItem) {
  return (
    <S.Wrapper>
      <S.Card>
        <img src={`./${img}`} />
        <S.Desc>
          {name} 
          <Link href={`/pokemon-detail/${name}`}><S.LinkText>Show More</S.LinkText> </Link> 
        </S.Desc>
      </S.Card>
    </S.Wrapper>
    );
  }

export default CardItem;
