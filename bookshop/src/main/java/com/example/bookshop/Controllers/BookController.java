package com.example.bookshop.Controllers;

import com.example.bookshop.Models.Book;
import com.example.bookshop.Services.BookServiceImpl;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/book")
@CrossOrigin(origins="*")
public class BookController {

    @Autowired
    BookServiceImpl bookServ;

    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody Book book) throws Exception {
        try {
            Book bookSaved = bookServ.save(book);
            return ResponseEntity.status(HttpStatus.CREATED).body(bookSaved);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }
    }

    @GetMapping("/list/{page}")
    public ResponseEntity<?> list(Pageable pageable) throws Exception {
        try {
            Page<Book> books = bookServ.getBooks(pageable);
            return ResponseEntity.status(HttpStatus.OK).body(books);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }

    }

    @GetMapping("{id}")
    public ResponseEntity<?> getBookById(@PathVariable int id) throws Exception {
        try {
            Optional<Book> bookFind = bookServ.getBookById(id);

            if (!bookFind.isPresent()) {
                return ResponseEntity.notFound().build();
            }

            return ResponseEntity.status(HttpStatus.OK).body(bookFind);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateBook(@PathVariable int id, @RequestBody Book book) throws Exception {
        try {
            Optional<Book> bookFind = bookServ.getBookById(id);

            if (!bookFind.isPresent()) {
                return ResponseEntity.notFound().build();
            }

            Book bookUpdate = bookFind.get();
            bookUpdate.setId(id);
            bookUpdate.setTitle(book.getTitle());
            bookUpdate.setDescription(book.getDescription());
            bookUpdate.setCategory(book.getCategory());
            bookUpdate.setPrice((Double) book.getPrice());
            bookUpdate.setIsbn(book.getIsbn());
            bookUpdate.setPages(book.getPages());
            bookUpdate.setPublication_date(book.getPublication_date());

            bookServ.save(bookUpdate);

            return ResponseEntity.status(HttpStatus.OK).body(bookUpdate);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable int id) throws Exception {
        try {
            bookServ.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }
    }

    @GetMapping("/search/{title}")
    public ResponseEntity<?> search(@PathVariable String title) throws Exception {
        try {
            List<?> books = bookServ.findByTitleContaining(title);
            //List<?> books = bookServ.searchTitle(title);
            return ResponseEntity.status(HttpStatus.OK).body(books);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }
    }
}
