package daaw.backend.controllers.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
    
@RestControllerAdvice
public class RestExceptionHandler {
    @ExceptionHandler(CocheNotFoundException.class)
    public ResponseEntity<String> handleNotFound(CocheNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ranking not found");
    }
}