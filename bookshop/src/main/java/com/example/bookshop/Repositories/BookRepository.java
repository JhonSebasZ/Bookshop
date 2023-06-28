
package com.example.bookshop.Repositories;

import com.example.bookshop.Models.Book;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author agmeth
 */
public interface BookRepository extends JpaRepository<Book, Integer>{
       
    List<Book> findByTitleContaining(String title);
       
    @Query(value = "SELECT b FROM Book b WHERE b.title like %?1%")
    List<Book> searchTitle(String title);
    
   
    
}
