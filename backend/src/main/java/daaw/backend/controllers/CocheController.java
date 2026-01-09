package daaw.backend.controllers;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import daaw.backend.controllers.Exception.CocheNotFoundException;
import daaw.backend.persistence.model.Coche;
import daaw.backend.services.CocheService;

@RestController
@RequestMapping("/cars")
public class CocheController {

    private final CocheService cocheService;

    public CocheController(CocheService cocheService) {
        this.cocheService = cocheService;   
    }

    @GetMapping("/{id}") 
    public ResponseEntity<Coche> findOne(@PathVariable Long id) {
        Coche coche = cocheService.findById(id).orElseThrow(CocheNotFoundException::new);
        return ResponseEntity.ok(coche);
    }

    @PostMapping
    public ResponseEntity<Coche> create(@RequestBody Coche coche, UriComponentsBuilder uriBuilder) {
        coche.setId(null);
        Coche saved = cocheService.save(coche);

        URI location = uriBuilder.path("/cars/{id}").buildAndExpand(saved.getId()).toUri();
        return ResponseEntity.created(location).body(saved);
    }
    
}
