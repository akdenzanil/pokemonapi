import styled from "styled-components";

const Wrapper = styled.div`
width:100%;
`;

const Card = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color: #fff;
color:black;
padding:10px 15px;
border-radius:10px;
text-transform:capitalize;
img{
    width:40px;
}
`;

const Desc = styled.div`
 display:flex;
 flex-direction:column;
 
`;
const LinkText = styled.small`
color:#dad8d8;
 
`;

export {Wrapper,Card,Desc,LinkText};