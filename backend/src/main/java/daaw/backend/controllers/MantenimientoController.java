package daaw.backend.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import daaw.backend.persistence.model.Mantenimiento;
import daaw.backend.services.MantenimientoService;

@RestController
@RequestMapping("/maintenances")
public class MantenimientoController {
    private final MantenimientoService mantenimientoService;

    public MantenimientoController(MantenimientoService mantenimientoService) {
        this.mantenimientoService = mantenimientoService;
    }

    @GetMapping
    public ResponseEntity<List<Mantenimiento>> findAll() {
        return ResponseEntity.ok(mantenimientoService.findAll());
    }
}
