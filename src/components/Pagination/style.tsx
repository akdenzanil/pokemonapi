import styled from "styled-components";

const Pagination = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top:15px;
   a {
    cursor: pointer;
   }
   
   .pageItem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    color:#000;
    background:#fff;
    margin-left:10px;
    border-radius: 0.5rem;
    cursor: pointer;
   }
   
   /* pagination page item when active */
   .pageItemActive {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    margin-left:10px;
    border: 1px solid #F18A8A;
    color:#fff;
    border-radius: 0.5rem;
    cursor: pointer;
    }
`;
 
export {Pagination};