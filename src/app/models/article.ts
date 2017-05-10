import { IArticleDocument } from "./articleDocument";

export interface IArticle {
  dist: number;
  doc: IArticleDocument;
  domain: string;
  url: string;
}
