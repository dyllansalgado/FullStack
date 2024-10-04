# Crea una funcion que calcule el área de un circulo:
def areaCirculo(radio):
  pi = 3.1416
  area = pi * radio**2
  return area


def main():
  radio = float(input("Ingrese el radio del circulo: "))
  print(f"El area del circulo es: {areaCirculo(radio)}")


main()
