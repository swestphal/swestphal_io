import React from 'react';
import { Link } from 'gatsby';

export default function Pagination({
  perPage,
  totalCount,
  currentPage,
  skip,
  base,
  categorySlug,
  categoryName,
}) {
  console.log(categoryName);
  console.log(categorySlug);
  const totalPages = Math.ceil(totalCount / perPage);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const categoryPath = categoryName !== 'All' ? `${categorySlug}` : ``;

  const linkToPrev = currentPage > 2 ? `${currentPage - 1}` : '';
  const linkToNext = currentPage > 0 ? `${currentPage + 1}` : ``;

  return (
    <div>
      <Link to={`${base}${categoryPath}/${linkToPrev}`}>Prev</Link>
      <Link to={`${base}${categoryPath}/${linkToNext}`}>Next</Link>
    </div>
  );
}
