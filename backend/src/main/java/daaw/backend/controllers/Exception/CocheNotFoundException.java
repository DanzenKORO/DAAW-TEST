package daaw.backend.controllers.Exception;

public class CocheNotFoundException extends RuntimeException {
    
    private static final long serialVersionUID = 1L;

    public CocheNotFoundException() {
        super();
    }

    public CocheNotFoundException(final String message, final Throwable cause) {
        super(message, cause);
    }

    public CocheNotFoundException(final String message) {
        super(message);
    }

    public CocheNotFoundException(final Throwable cause) {
        super(cause);
    }
}
