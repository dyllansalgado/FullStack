# Crear una función para calcular la tasa de desempleo.
# tasa = (n° de desempleados / n° de empleados + n° de desempleados) * 100
def tasaDesempleo(nEmpleados, nDesempleados):
  tasa = (nDesempleados/(nEmpleados+nDesempleados)) * 100
  print(f"La tasa de desempleo es: {tasa}%")


def main():
  nEmpleados = int(input("Ingrese el n° de empleados: "))
  nDesempleados = int(input("Ingrese el n° de desempleados: "))
  tasaDesempleo(nEmpleados, nDesempleados)

main()