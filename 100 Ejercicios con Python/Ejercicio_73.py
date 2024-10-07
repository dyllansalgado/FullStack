# Crear una clase libro con atributos: título, autor, editorial, año de publicación. Los métodos deben ser un constructor para inicializarlos.

class Libro:
  # El método __init__ es el constructor de la clase.
  def __init__(self, titulo,autor,editorial,añoPublicacion):
    # Atributos de la clase
    self.titulo = titulo
    self.autor = autor
    self.editorial = editorial
    self.añoPublicacion = añoPublicacion
  # Método para mostrar el libro
  def mostrarLibro(self):
    print(f"El titulo del libro es: {self.titulo} creado por {self.autor} en la editorial {self.editorial} en el año {self.añoPublicacion}")


#Se crea la instancia del objeto:

libroInstancia = Libro("Cien años de soledad","Gabriel García Márquez","'Editorial Sudamericana'","1967.")

#Se llama el metodo mostrar Libro
libroInstancia.mostrarLibro()
