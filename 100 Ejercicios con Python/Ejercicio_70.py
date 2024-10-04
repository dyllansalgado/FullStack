# Escribir una función para determinar si una sustancia es ácida, básica o neutra, según su pH.
def clasificar_ph(ph):
  if ph < 7:
      return "Ácida"
  elif ph > 7:
      return "Básica"
  else:
      return "Neutra"


def main():
  ph = float(input("Ingrese el pH de la sustancia: "))
  resultado = clasificar_ph(ph)
  print(f"El pH {ph} indica que la sustancia es: {resultado}")

main()