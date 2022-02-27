export interface News {
  title: string;
  createDate?: string;
  endDate?: string;
  path?: string;
  cover?: string;
}

export interface NewsState {
  newsList: News[]
}
