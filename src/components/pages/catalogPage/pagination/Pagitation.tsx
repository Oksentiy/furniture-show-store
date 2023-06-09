import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import {fetchProducts} from "../model/services/getProductDataFromApi";
import {PageLink} from './PageLink';
import { getPaginationItems } from './src/pagination'

import './styles/Pagination.scss';
import {useNavigate} from "react-router-dom";

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination = ({
   currentPage,
   lastPage,
   maxLength,
   setCurrentPage}: Props) => {

  const dispatch:Dispatch = useDispatch()
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  const navigate = useNavigate();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts(`page=${currentPage}`)); // передаємо ідентифікатор користувача як аргумент
    navigate({ search: `page=${currentPage}` });
  },[currentPage])

  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        &#x276E;
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          activeBtn={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {!isNaN(pageNum) ? pageNum : '...'}
        </PageLink>
      ))}
      <PageLink
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        &#x276F;
      </PageLink>
    </nav>
  );
}