#Crear una clase animal con atributos especie y nombre. Métodos constructor y hablar(), que retorne un sonido acorde al animal ingresado.

class Animal:
    # El método __init__ es el constructor de la clase.
    def __init__(self, especie, nombre):
      # Atributos de la clase
      self.especie = especie
      self.nombre = nombre
    # Método para hablar
    def hablar(self):
        if self.especie.lower() == 'perro':
            return 'Guau'
        elif self.especie.lower() == 'gato':
            return 'Miau'
        elif self.especie.lower() == 'vaca':
            return 'Muu'
        elif self.especie.lower() == 'oveja':
            return 'Bee'
        else:
            return 'No hay ruido'



#Se crea la instancia del objeto:
animalInstance = Animal('perro','billy')
sonido = animalInstance.hablar()
print(f"El nombre del animal es {animalInstance.nombre} es un {animalInstance.especie} y su sonido es : {sonido}")

