export class Pagination<T> {
  links: PaginationLink[];
  totalCount: number;
  resultCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
  results: T[];
}

export interface PaginationLink {
  hRef: string;
  rel: string;
  method: string;
}
