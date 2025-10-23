package in.ap.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.ap.main.entity.Book;
import in.ap.main.service.BookService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173/")
public class BookController {
	@Autowired
	private BookService bookService;
	
	@PostMapping("/book")
	public Book addData(@RequestBody Book book) {
		return bookService.addBookData(book);
	}
	
	@GetMapping("/book")
	public List<Book> getAll(){
		return bookService.getAllBookData();
	}
	@GetMapping("/book/{id}")
	public Book getById(@PathVariable int id) {
		return bookService.getBookDataById(id);
	}
	
	@PutMapping("/book/{id}")
	public Book updateData(@PathVariable int id,@RequestBody Book book) {
		return bookService.updateBookDataById(id, book);
	}
	@DeleteMapping("/book/{id}")
	public String deleteData(@PathVariable int id) {
		return bookService.deleteBookDataById(id);
	}
}
