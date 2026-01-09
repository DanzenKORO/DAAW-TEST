package daaw.backend.persistence.model;

import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Mantenimiento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Date fecha;

    @Column(nullable =  false)
    private String descripcion;

    @Column(nullable =  false)
    private float coste;

    public Mantenimiento() {}

    public Mantenimiento(Date fecha, String descripcion, float coste) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.coste = coste;
    }

    public Long getId() {return id;}
    public Date getFecha() {return fecha;}
    public String getDescripcion() {return descripcion;}
    public float getCoste() {return coste;}

    public void setId(Long id) {this.id = id;}
    public void setFecha(Date fecha) {this.fecha = fecha;}
    public void setCoste(float coste) {this.coste = coste;}

    @Override
    public String toString() {
        return "Mantenimiento{" +
                "id=" + id +
                ", fecha='" + fecha + '\'' +
                ", descripcion=" + descripcion +
                ", coste=" + coste + '€' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Mantenimiento ranking = (Mantenimiento) o;
        return id != null && Objects.equals(id, ranking.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
    
}
