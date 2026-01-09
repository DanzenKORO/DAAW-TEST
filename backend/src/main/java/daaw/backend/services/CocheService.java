package daaw.backend.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import daaw.backend.persistence.model.Coche;
import daaw.backend.persistence.repo.CocheRepository;

@Service
public class CocheService {
    private final CocheRepository cocheRepository;

    public CocheService(CocheRepository cocheRepository) {
        this.cocheRepository = cocheRepository;
    }

    public Optional<Coche> findById(Long id){
        return cocheRepository.findById(id);
    }

    public Coche save(Coche coche) {
        return cocheRepository.save(coche);
    }
}
