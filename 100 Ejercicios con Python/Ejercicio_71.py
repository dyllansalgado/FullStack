# Crear una clase rectángulo con atributos: base y altura. La clase debe tener métodos que calculen el área y el perímetro del rectángulo.

class rectangulo:
  # El método __init__ es el constructor de la clase.
  def __init__(self, base, altura):
    # Atributos de la clase
    self.base = base
    self.altura = altura
  # Método para calcular el area
  def area(self):
    calculoArea = self.base * self.altura
    print(f"El área del rectángulo es: {calculoArea}")
  def perimetro(self):
    calculoPerimetro = (self.base * 2) + (self.altura * 2)
    print(f"El perímetro del rectángulo es: {calculoPerimetro}")


#Se crea la instancia del objeto:

rectangulo1 = rectangulo(5,4)

#Se llama el metodo area
rectangulo1.area()
#Se llama el metodo perimetro
rectangulo1.perimetro()