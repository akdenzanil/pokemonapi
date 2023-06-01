import styled from "styled-components";

const PokemonDetailCard = styled.div`
background:#fff;
width:50%;
margin:0 auto;
margin-top:25px;
padding:15px;
border-radius:15px;
text-transform:capitalize;
 
`;
const PokemonDetail = styled.div`
 display:flex;
 margin:25px;
 align-items: center;
`;
const DetailArea = styled.div`
 margin-left:25px;
`;

const List = styled.ul`
 display:flex;
 flex-wrap: wrap;
 margin:10px 0px;
`;

const ListItem = styled.li`
 background:#F18A8A;
 padding:5px 15px;
 color:#fff;
 border-radius:5px;
 margin:2px;
 
`;
 
const LinkText = styled.small`
color:#dad8d8;
 
`;

export { PokemonDetailCard, List,PokemonDetail, ListItem, DetailArea };