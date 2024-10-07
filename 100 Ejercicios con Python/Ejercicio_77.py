#Crear una clase persona, con atributos: nombre, edad, constructor con datos que pueden estar vacíos. Setters, getters, método para mostrar datos y para indicar si es mayor de edad.

class Persona:
    # El método __init__ es el constructor de la clase.
    def __init__(self, nombre = '', edad = None ):
      # Atributos de la clase
      self.nombre = nombre
      self.edad = edad
    # Método getters
    @property
    def nombre(self):
        return self._nombre
    @property
    def edad(self):
        return self._edad
    # Método setters
    @nombre.setter
    def nombre(self, nuevo_nombre):
        self._nombre = nuevo_nombre
    @edad.setter
    def edad(self, nueva_edad):
        if nueva_edad is not None and nueva_edad < 0:
            print("La edad no puede ser negativa")
        self._edad = nueva_edad
    # Método para mostrar los datos e indicar si es mayor de edad.
    def mostrar_datos(self):
        if self._edad != None and self._edad > 0 :
            return f"La edad es: {self.edad}"
        else:
            return "Edad no especificada"
            
    def es_mayor_de_edad(self):
        if self._edad != None and self._edad >= 18:
            return "Si es mayor de edad"
        elif self._edad != None and self._edad < 18 and self._edad > 0:
            return "No, es menor de edad"
        else:
            return "No puede ingresar datos negativos"
    
persona1 = Persona('Dyllan', )
print(persona1.mostrar_datos())
print(persona1.es_mayor_de_edad())

print("Persona 2")

persona2 = Persona('Pepe', -2)
print(persona2.mostrar_datos())
print(persona2.es_mayor_de_edad())