package es.overon.poc.notes;

import es.overon.poc.notes.domain.Note;
import es.overon.poc.notes.repository.NoteRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@Slf4j
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest(classes = NotesApplication.class)
public class NoteTests {

	@Autowired NoteRepository repository;

	@BeforeEach
	@AfterEach
	public void clearDb() {
		repository.deleteAll();
	}

	@Test
	@Order(1)
	public void testNewNote() {
		log.info("Executing " + new Object() {}
				.getClass()
				.getEnclosingMethod()
				.getName());

		Note testNote = new Note(1L, "jesus.garcia", "Nota de prueba");

		testNote = repository.save(testNote);

		Iterable<Note> notes = repository.findAll();
		assertThat(notes).hasSize(1);
		assertThat(notes).contains(testNote);
	}

	@Test
	@Order(2)
	public void testFindByUserName() {
		log.info("Executing " + new Object() {}
				.getClass()
				.getEnclosingMethod()
				.getName());

		Note testNote = new Note(1L, "jesus.garcia", "Nota de prueba");
		Note testNote2 = new Note(1L, "juan.perez", "Nota de prueba 2");

		testNote = repository.save(testNote);
		testNote2 = repository.save(testNote2);

		Iterable<Note> notes = repository.findByUserName(testNote.getUserName());
		assertThat(notes).hasSize(1);
		assertThat(notes).doesNotContain(testNote2);
	}

}