package es.overon.poc.notes;

import es.overon.poc.notes.domain.Note;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class NotesApplication implements RepositoryRestConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(NotesApplication.class, args);
	}

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
		config.exposeIdsFor(Note.class);
	}

}
