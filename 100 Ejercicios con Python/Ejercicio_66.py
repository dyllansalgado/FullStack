# Crear una función para calcular el promedio de una lista de números.
def promedio(lista):
  suma = 0
  for i in range(len(lista)):
    suma = lista[i] + suma
  prom = suma / len(lista)
  return prom


def main():
  lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  prome = promedio(lista)
  print(f"El promedio de la lista: {lista} = {prome}")

main()

