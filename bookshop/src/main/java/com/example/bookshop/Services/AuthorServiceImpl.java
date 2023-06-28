
package com.example.bookshop.Services;

import com.example.bookshop.Models.Author;
import com.example.bookshop.Models.Book;
import com.example.bookshop.Repositories.AuthorRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class AuthorServiceImpl implements AuthorService{
    
    @Autowired
    AuthorRepository authorRepo;
    
    @Transactional
    @Override
    public Author save(Author author) throws Exception {
        try {
            return authorRepo.save(author);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Page<Author> getAuthors(Pageable pageable) throws Exception {
        try {
            return authorRepo.findAll(pageable);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
    
    @Override
    public List<Author> getAuthorsByName(String name) throws Exception {
        try {
            return authorRepo.findByNameContaining(name);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
    
    @Transactional
    @Override
    public void delete(int id) throws Exception {
        try {
            authorRepo.deleteById(id);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Optional<Author> getAuthorById(int id) throws Exception {
        try {
            return authorRepo.findById(id);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
