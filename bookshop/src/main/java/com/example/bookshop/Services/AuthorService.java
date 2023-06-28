
package com.example.bookshop.Services;

import com.example.bookshop.Models.Author;
import com.example.bookshop.Models.Book;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AuthorService {
    public Author save(Author author) throws Exception;
    public Page<Author> getAuthors(Pageable pageable) throws Exception;
    Optional<Author> getAuthorById(int id) throws Exception;
    public void delete(int id) throws Exception;
    
    
    List<Author> getAuthorsByName(String name) throws Exception;
}
