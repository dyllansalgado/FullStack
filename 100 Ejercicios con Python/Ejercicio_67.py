# Escribir una función para calcular el volumen de un cilindro.
def volumenCilindro(radio,altura):
  volumen = 3.1416 * (radio**2) * altura
  return volumen


def main():
  altura = int(input("Ingrese la altura del cilindro: "))
  radio = int(input("Ingrese el radio del cilindro: "))
  volumen = volumenCilindro(radio, altura)
  print(f"El volumen del cilindro con altura {altura} y radio {radio} es: {volumen}")

main()
