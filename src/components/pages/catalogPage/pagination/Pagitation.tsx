import {PageLink} from './PageLink';
import { getPaginationItems } from './src/pagination'

import './styles/Pagination.scss';
import {setQueryParams} from "components/store/queryParamsSlice";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {store} from "components/store/store";
import {fetchProducts} from "components/store";
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
  const navigate = useNavigate()
  const dispatch:Dispatch = useDispatch()
  const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts(`page=${currentPage}`)); // передаємо ідентифікатор користувача як аргумент
  },[currentPage])
  // console.log(currentPage)

  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          active={currentPage === pageNum}
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
        Next
      </PageLink>
    </nav>
  );
}