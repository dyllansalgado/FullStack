# Crear una clase persona con atributos: nombre, edad, identificación, con métodos constructor que retorne True si es mayor de edad.

class Persona:
  # El método __init__ es el constructor de la clase.
  def __init__(self, nombre, edad, identificacion):
    # Atributos de la clase
    self.nombre = nombre 
    self.edad = edad
    self.identificacion = identificacion
  # Método para mostrar a la persona
  def mayorDeEdad(self):
    if self.edad >= 18:
      print(f"La persona {self.nombre} es mayor de edad")
    else:
      print(f"La persona {self.nombre} es menor de edad")


#Se crea la instancia del objeto:
edad = int(input("Ingrese la edad: "))
personaInstancia = Persona("Dyllan", edad, "12345678")

#Se llama el metodo que verifica si es mayor de edad
personaInstancia.mayorDeEdad()
