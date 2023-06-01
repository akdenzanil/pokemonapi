"use client";
import { useEffect, useState } from "react";
import PokemonService from "@/service/pokemon";
import PokemonDetail from "@/components/PokemonDetail";
import { useRouter } from "next/navigation";

export default function Home({ params }:any) {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const router = useRouter();

  const pokemanName = params?.slug ?? '';
  const [pokemonDetail, setPokemonDetail] = useState<any[]>([]);

  useEffect(() => {
    PokemonService.getPokemonDetail(pokemanName)
      .then((data) => {
        setPokemonDetail(data);
        setIsLoading(false)
      })
      .catch(() => {
      router.push("/404")
      return null;
      }) 
  }, []);

  return (
    <main>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <PokemonDetail data={pokemonDetail} />
      )}
    </main>
  );
}