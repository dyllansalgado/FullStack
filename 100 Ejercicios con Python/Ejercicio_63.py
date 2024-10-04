# Crea una funcion que imprima un mensaje de saludo.
def mensaje(nombre):
  saludo = print(f"Buen dia estimado (a) {nombre}")
  return saludo


def main():
  nombre = str(input("Ingrese su nombre: "))
  saludo = mensaje(nombre)

main()


