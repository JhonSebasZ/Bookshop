
package com.example.bookshop.Repositories;

import com.example.bookshop.Models.Author;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Author, Integer>{
    List<Author> findByNameContaining(String name);
}
