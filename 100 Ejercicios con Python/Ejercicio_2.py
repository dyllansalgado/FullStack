#Area de un circulo con un Radio ingresado por usuario:
#Aca se puede hacer de dos formas, usando el valor de Pi como 3.16 o usando la importación de la libreria que trae PI que es math.
#Se hara de las dos formas.
print("El área de un circulo se calcula como PI * R al cuadrado")

print("-"*50)
print("Metodo 1: usando PI como 3.16")

radio = int(input("Ingrese el radio del circulo para calcular su área: "))

area = 3.16*(radio**2)

print(f"El área del circulo usando metodo 1 con radio: {radio} es de {area}!")

print("-"*50)

print("Metodo 2: usando PI con la libreria math")

import math

area2 = math.pi*(radio**2)

print(f"El área del circulo usando metodo 2 con radio: {radio} es de {area2}!")
print("-"*50)