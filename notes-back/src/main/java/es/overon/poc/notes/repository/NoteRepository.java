package es.overon.poc.notes.repository;

import es.overon.poc.notes.domain.Note;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("*")
@RepositoryRestResource(collectionResourceRel = "notes", path = "notes")
public interface NoteRepository extends PagingAndSortingRepository<Note, Long> {
    List<Note> findByUserName(@Param("userName") String userName);
}
