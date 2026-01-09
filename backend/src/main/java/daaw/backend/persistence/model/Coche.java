package daaw.backend.persistence.model;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Coche {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String matricula;

    @Column(nullable = false)
    private int matriculacion;

    public Coche() {}

    public Coche(String matricula, int matriculacion) {
        this.matricula = matricula;
        this.matriculacion = matriculacion;
    }

    public Long getId() {return id;}
    public String getMatricula() {return matricula;}
    public int getMatriculacion() {return matriculacion;}
    
    public void setId(Long id) {this.id = id;}
    public void setMatricula(String matricula) {this.matricula = matricula;}
    public void setMatriculacion(int matriculacion) {this.matriculacion = matriculacion;}

    @Override
    public String toString() {
        return "Coche{" +
                "id=" + id +
                ", matricula='" + matricula + '\'' +
                ", matriculacion=" + matriculacion +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Coche coche = (Coche) o;
        return id != null && Objects.equals(id, coche.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
    
}
