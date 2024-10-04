# Crear una clase círculo con atributos: radio. La clase debe tener métodos que calculen el área y el perímetro del círculo.

class circulo:
  # El método __init__ es el constructor de la clase.
  def __init__(self, radio):
    # Atributos de la clase
    self.radio = radio
  # Método para calcular el area
  def area(self):
    calculoArea = 3.1416*(self.radio**2)
    print(f"El área del circulo es: {calculoArea}")
  def perimetro(self):
    calculoPerimetro = 2*3.1416*self.radio
    print(f"El perímetro del circulo es: {calculoPerimetro}")


#Se crea la instancia del objeto:

circuloValor = circulo(5)

#Se llama el metodo area
circuloValor.area()
#Se llama el metodo perimetro
circuloValor.perimetro()
