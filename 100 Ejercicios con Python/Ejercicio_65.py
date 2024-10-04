# Crear una función para pasar de grados celsius a fahrenheit.
# 0 grados celsius = a 32 fahreheit
# formula = (x °C * 9/5) + 32
def cambiar(grados):
  fahrenheit = grados * 1.8 + 32
  return fahrenheit


def main():
  grados = int(input("Ingrese los grados celsius para pasarlo a fahrenheit: "))
  fahrenheit = cambiar(grados)
  print(f"Los {grados} celsius equivalen a {fahrenheit} grados fahrenheit")


main()
