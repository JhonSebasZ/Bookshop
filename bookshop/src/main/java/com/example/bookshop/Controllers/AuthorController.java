package com.example.bookshop.Controllers;

import com.example.bookshop.Models.Author;
import com.example.bookshop.Services.AuthorServiceImpl;
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
@RequestMapping("/api/v1/author")
@CrossOrigin(origins="*")
public class AuthorController {

    @Autowired
    AuthorServiceImpl authorServ;

    @PostMapping("/save")
    public ResponseEntity<Author> save(@RequestBody Author author) throws Exception {
        Author authorSaved = authorServ.save(author);
        return ResponseEntity.status(HttpStatus.CREATED).body(authorSaved);
    }
    
    @GetMapping("/list")
    public ResponseEntity<?> getAuthor(Pageable pageable) throws Exception {
        try {
            Page<Author> authors = authorServ.getAuthors(pageable);
            return ResponseEntity.status(HttpStatus.OK).body(authors);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }
    }

    @GetMapping("/list/{page}")
    public ResponseEntity<?> getAuthorPage(Pageable pageable) throws Exception {
        try {
            Page<Author> authors = authorServ.getAuthors(pageable);
            return ResponseEntity.status(HttpStatus.OK).body(authors);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateAuthor(@PathVariable int id, @RequestBody Author author) throws Exception {
        try {
            Optional<Author> authorFind = authorServ.getAuthorById(id);

            if (!authorFind.isPresent()) {
                return ResponseEntity.notFound().build();
            }

            Author authorUpdate = authorFind.get();
            authorUpdate.setId(id);
            authorUpdate.setName(author.getName());
            authorUpdate.setLastname(author.getLastname());
            authorUpdate.setBiography(author.getBiography());

            authorServ.save(authorUpdate);

            return ResponseEntity.status(HttpStatus.OK).body(authorUpdate);

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteAuthor(@PathVariable int id) throws Exception {
        try {
            authorServ.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }  
    }
    
    @GetMapping("search/{name}")
    public ResponseEntity<?> getAuthorsByName(@PathVariable String name) throws Exception {
        try {
            List<Author> authorFind = authorServ.getAuthorsByName(name);
            return ResponseEntity.status(HttpStatus.OK).body(authorFind);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(("{'error':'" + e.getMessage() + "'}"));
        }

    }
}
