package daaw.backend.services;

import java.util.List;

import org.springframework.stereotype.Service;

import daaw.backend.persistence.model.Mantenimiento;
import daaw.backend.persistence.repo.MantenimientoRepository;

@Service
public class MantenimientoService {
    private final MantenimientoRepository mantenimientoRepository;

    public MantenimientoService(MantenimientoRepository mantenimientoRepository) {
        this.mantenimientoRepository = mantenimientoRepository;
    }

    public List<Mantenimiento> findAll() {
        return mantenimientoRepository.findAll();
    }
}
