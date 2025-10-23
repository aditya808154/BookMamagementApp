package in.ap.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ap.main.entity.Book;

public interface BookRepository extends JpaRepository<Book,Integer> {

}
