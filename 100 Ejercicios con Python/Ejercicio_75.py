# Crear una clase vehículo con atributos: marca, modelo, matricula, km; con los métodos constructor, avanzar(km) que aumenta el valor de km en la respectiva cantidad.

class vehiculo:
  # El método __init__ es el constructor de la clase.
  def __init__(self, marca, modelo, matricula, km):
    # Atributos de la clase
    self.marca = marca 
    self.modelo = modelo
    self.matricula = matricula
    self.km = km
  # Método para avanzar los km correspondientes
  def avanzarKM(self):
    for i in range(km):
      recorrido = i + 1
      print(f"Ha recorrido {recorrido} KM")
      if i == km-1:
        print("El recorrido ha terminado!")



#Se crea la instancia del objeto:
km = int(input("Ingrese los km: "))
vehiculoInstancia = vehiculo("Toyota", "Corolla", "1231BA", km)
print(f"El vehiculo {vehiculoInstancia.marca} {vehiculoInstancia.modelo} comienza el recorrido")

#Se llama el metodo que muestra el avance de los km correspondientes

vehiculoInstancia.avanzarKM()