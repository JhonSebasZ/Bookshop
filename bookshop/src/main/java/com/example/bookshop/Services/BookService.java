
package com.example.bookshop.Services;

import com.example.bookshop.Models.Book;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface BookService {
    public Book save(Book book) throws Exception;
    public Page<Book> getBooks(Pageable  pageable) throws Exception;
    Optional<Book> getBookById(int id) throws Exception;
    public void delete(int id) throws Exception;
    
    List<Book> findByTitleContaining(String title) throws Exception;
    List<Book> searchTitle(String title) throws Exception;
}
