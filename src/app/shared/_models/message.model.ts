import { PaginationLink } from './pagination.model';
export interface Message {
  consumerId: string;
  id: string;
  message: string;
  projectId: string;
  providerId: string;
  senderType: SenderTypeEnum;
  messageDate: string;

  consumerImage: string;
  consumerFirstName: string;
  consumerLastName: string;
  providerImage: string;
  providerFirstName: string;
  providerLastName: string;
}

export class MessagePage {
  links: PaginationLink[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;

  consumerId: string;
  consumerFirstName: string;
  consumerLastName: string;
  providerId: string;
  providerFirstName: string;
  providerLastName: string;

  messages: Message[];
}

export enum SenderTypeEnum {
  consumer = 0,
  provider = 1
}
