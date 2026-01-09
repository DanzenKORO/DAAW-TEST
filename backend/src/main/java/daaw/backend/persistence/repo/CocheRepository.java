package daaw.backend.persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import daaw.backend.persistence.model.Coche;

@Repository
public interface CocheRepository extends JpaRepository<Coche, Long> {

}
