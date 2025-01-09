import api from "./Api";
import { Book, CreateBook } from "@/models/Book.model";

export const BookService = {
  getBooks: async (): Promise<Book[]> => {
    const response = await api.get<Book[]>("/660/smallbook?_start=0&_end=15");
    return response.data;
  },

  getBookById: async (id: number): Promise<Book> => {
    const response = await api.get<Book>(`/660/smallbook/${id}`);
    return response.data;
  },

  createBook: async (newBookData: CreateBook): Promise<Book> => {
    const response = await api.post<Book>("/660/smallbook", newBookData);
    return response.data;
  },

  updateBook: async (updatedBookData: Book): Promise<Book> => {
    const response = await api.put<Book>(`/660/smallbook/${updatedBookData.id}`, updatedBookData);
    return response.data;
  },

  deleteBook: async (bookId: number): Promise<void> => {
    await api.delete(`/660/smallbook/${bookId}`);
  },
};

export default BookService;
