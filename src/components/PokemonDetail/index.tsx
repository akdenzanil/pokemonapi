"use client";
import Link from "next/link";
import React from "react";
import * as S from "./style";

interface IPokemonDetail {
  data: any,
}
function PokemonDetail({ data }: IPokemonDetail) {
  const abilities = data.abilities;
  const stats = data.stats; 
  return (
    <S.PokemonDetailCard>
      <h3> {data.name} </h3>
     <S.PokemonDetail>
      <img src={`${data.sprites?.other.dream_world.front_default}`} />
      <S.DetailArea>
      <h5>  Abilities</h5>
      
      <S.List>
        {abilities?.length > 0 &&
          abilities.map((item: any, index: any) => (
            <S.ListItem key={index} > {item.ability.name} </S.ListItem>
          ))}
    
      </S.List>
      <h5>  Stats</h5>
      <S.List>
        {stats?.length > 0 &&
          stats.map((item: any, index: any) => (
            <S.ListItem key={index} > {item.stat.name} : {item.base_stat} </S.ListItem>
          ))}
    
      </S.List>
      </S.DetailArea>
      </S.PokemonDetail> 

      <Link  href={"/"}>Go Back</Link>

    </S.PokemonDetailCard>
  );
}

export default PokemonDetail;
