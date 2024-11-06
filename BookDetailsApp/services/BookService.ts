import api from "./Api";
import { Book, CreateBook } from "../models/Book.model";

export const BookService = {
  getBooks: async (): Promise<Book[]> => {
    const response = await api.get<Book[]>("/660/smallbook"); 
    return response.data;
  }
  },
};

export default BookService;
