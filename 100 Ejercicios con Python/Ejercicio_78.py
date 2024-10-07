#Crear una clase Persona y una clase Estudiante. La clase Persona tiene el atributo nombre y el método mostrar_nombre(). La clase Estudiante hereda de Persona y utiliza el método heredado de mostrar_nombre().

class Persona:
    # El método __init__ es el constructor de la clase.
    def __init__(self, nombre):
      # Atributos de la clase
      self.nombre = nombre
    def mostrar_nombre(self):
        print(f"El nombre de la persona es: {self.nombre}")
#Se define la clase estudiante que hereda los metodos y atributos de la clase persona.    
class Estudiante(Persona):
    def __init__(self, nombre):
        super().__init__(nombre)

estudiante1 = Estudiante('Dyllan')

estudiante1.mostrar_nombre()