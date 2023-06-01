"use client";
import React from "react";
import * as S from "./style";
import Link from "next/link";

interface IPagination {
  items:number,
  currentPage:number,
  pageSize:number,
  onPageChange:any,
}
function Pagination({ items,currentPage,pageSize,onPageChange }: IPagination) {

const pagesCount = Math.ceil(items / pageSize); // 100/10

if (pagesCount === 1) return null;
const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);


return (
    <div>
    <S.Pagination>
      {pages.map((page) => (
        <li
          onClick={() => onPageChange(page)}
          key={page}
          className={`${page === currentPage ? `pageItemActive` : `pageItem`}`}
        >
          <a  >
            {page}
          </a>
        </li>
      ))}
    </S.Pagination>
  </div>
    );
  }

export default Pagination;
