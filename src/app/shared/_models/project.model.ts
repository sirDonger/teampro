import { PaginationLink } from './pagination.model';

export interface Project {
  link: PaginationLink;
  id: string;
  bidId: string;
  title: string;
  category: string;
  subCategory: string;
  description: string;
  status: string;
  zipCode: number;
  serviceType: string;
  desiredRangeStart: Date;
  desiredRangeEnd: Date;
  desiredTimeOfDay: string;
  desiredLocation: string;
  postDate: Date;
  lastUpdated: string;

  maxEstimate: number;
  minEstimate: number;
  myEstimate: number;

  // activeprojects
  percentageComplete: string;
}
