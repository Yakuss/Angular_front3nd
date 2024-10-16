import { BookType } from "./bookType.model";

export class Book {
  id?: number;
  title?: string;
  author?: string;
  publicationDate?: Date;
  pdfUrl?: string;
  favorite?: boolean;
  imageUrl?: string;
  bookType ?: BookType
}
