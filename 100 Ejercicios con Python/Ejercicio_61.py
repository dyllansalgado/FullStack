# Crea una funcion que sume dos numeros:
def suma(num1, num2):
  suma = num1 + num2
  return suma


def main():
  num1 = float(input("Ingrese el valor 1:"))
  num2 = float(input("Ingrese el valor 2:"))
  total = suma(num1, num2)
  print(f"La suma de {num1}+{num2} es: {total}")


main()
