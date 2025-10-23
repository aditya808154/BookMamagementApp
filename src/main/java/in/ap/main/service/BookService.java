package in.ap.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.ap.main.entity.Book;
import in.ap.main.repository.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepository;
	
	public Book addBookData(Book book) {
		return bookRepository.save(book);
	}
	
	public List<Book> getAllBookData(){
		return bookRepository.findAll();
	}
	
	public Book getBookDataById(int id) {
		return bookRepository.findById(id).orElse(null);
	}
	
	public Book updateBookDataById(int id,Book book) {
		Book data=bookRepository.findById(id).get();
		if(data!=null) {
			data.setTitle(book.getTitle());
			data.setAuthor(book.getAuthor());
			data.setPrice(book.getPrice());
			data.setStock(book.getStock());
			data.setCategory(book.getCategory());
			return bookRepository.save(data);
		}
		
		return null;
	}
	
	public String deleteBookDataById(int id) {
		bookRepository.deleteById(id);
		return "Book Data Deleted by Id:-"+id;
	}

}
