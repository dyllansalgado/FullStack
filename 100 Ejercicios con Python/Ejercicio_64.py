# Crear una función para determinar si un número es par o impar.
def parOImpar(numero):
  if numero % 2 == 0:
    print(f"El valor {numero} es par")
  else:
    print(f"El valor {numero} es impar")


def main():
  numero = int(input("Ingrese un numero para verificar si es par o impar:  "))
  parOImpar(numero)

main()