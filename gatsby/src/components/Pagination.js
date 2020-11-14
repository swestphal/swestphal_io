import React from 'react';
import { Link } from 'gatsby';

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
  const hasNextPage = nextPage <= totalCount;
  const hasPrevPage = prevPage > 0;
  const categoryPath = categoryName !== 'All' ? `${categorySlug}` : ``;

  const linkToPrev = currentPage > 2 ? `${currentPage - 1}` : '';
  const linkToNext = currentPage < totalPages ? `${currentPage + 1}` : ``;

  return (
    <div className="pagination">
      <ul>
        <li>
          <Link
            disabled={!hasPrevPage}
            to={`${base}${categoryPath}/${linkToPrev}`}
          >
            Prev
          </Link>
        </li>

        {Array.from({ length: totalCount }).map((_, i) => (
          <li>
            <Link
              className={currentPage === 1 && i === 0 ? 'active' : ''}
              to={`${base}${categorySlug}/${i === 0 ? '' : i + 1}`}
            >
              {i + 1}
            </Link>
          </li>
        ))}

        <li>
          <Link
            disabled={!hasNextPage}
            to={`${base}${categoryPath}/${linkToNext}`}
          >
            Next
          </Link>
        </li>
      </ul>
    </div>
  );
}
