# Simular el lanzamiento de una moneda.
import random

#Calculadora basica

print("Bienvenido al cara o sello")
# 0 es cara y 1 es sello
resultado = random.randint(0, 1)
opcion = int(input("Ingrese 0 para cara y 1 para sello: "))
if resultado == 1:
  print("Ha salido sello")
else:
  print("Ha salido cara")
print("Comparando con tu opcion.....")
if resultado == opcion:
  print("Ganaste")
else:
  print("Perdiste")