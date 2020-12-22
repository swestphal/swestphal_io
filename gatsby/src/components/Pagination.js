import React from 'react';
import { Link } from 'gatsby';
import { StyledPagination } from './Pagination.styled';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
  categorySlug,
  categoryName,
  categoryRegexName,
}) {
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage > 0;
  const categoryPath = categoryName !== 'All' ? `${categorySlug}` : ``;

  const linkToPrev = currentPage > 2 ? `${currentPage - 1}` : '';
  const linkToNext = currentPage < totalPages ? `${currentPage + 1}` : ``;

  return (
    <StyledPagination>
      <ul className="pagination__bar">
        <li key="list_00">
          <Link
            className="--dashed-border"
            disabled={!hasPrevPage}
            to={`${base}${categoryPath}/${linkToPrev}`}
          >
            Prev
          </Link>
        </li>

        {Array.from({ length: totalPages }).map((_, i) => (
          <li key={`'list_' + ${i}`}>
            <Link
              className={
                currentPage === 1 && i === 0
                  ? 'active --dashed-border'
                  : '--dashed-border'
              }
              to={`${base}${categorySlug}/${i === 0 ? '' : i + 1}`}
            >
              {i + 1}
            </Link>
          </li>
        ))}

        <li>
          <Link
            className="--dashed-border"
            disabled={!hasNextPage}
            to={`${base}${categoryPath}/${linkToNext}`}
          >
            Next
          </Link>
        </li>
      </ul>
    </StyledPagination>
  );
}
