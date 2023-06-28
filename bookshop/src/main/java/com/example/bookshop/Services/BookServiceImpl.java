
package com.example.bookshop.Services;

import com.example.bookshop.Models.Book;
import com.example.bookshop.Repositories.BookRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl implements BookService{

    @Autowired
    BookRepository bookRepo;
    
    @Override
    @Transactional
    public Book save(Book book) throws Exception{
        try {
          return bookRepo.save(book);  
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public Page<Book> getBooks(Pageable pageable) throws Exception {
        try {
            return bookRepo.findAll(pageable);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
    
    @Override
    public Optional<Book> getBookById(int id) throws Exception {
        try {
            return bookRepo.findById(id);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public void delete(int id) throws Exception {
        try {
          bookRepo.deleteById(id);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }   

    @Override
    public List<Book> findByTitleContaining(String title) throws Exception {
        try {
            return bookRepo.findByTitleContaining(title);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    public List<Book> searchTitle(String title) throws Exception {
        try {
            return bookRepo.searchTitle(title);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
