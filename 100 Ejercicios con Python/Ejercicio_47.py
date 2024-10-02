# Realizar un menú de opciones que permita la opción de salir.

#Calculadora basica

print("Bienvenido a la calculadora basica")
print("1. Suma")
print("2. Resta")
print("3. Salir")
bandera = 1
suma = 0
resta = 0
while bandera == 1:
  opcion = int(input("Ingrese una opción para calcular: "))
  if(opcion == 1):
    num1 = int(input("Ingrese el primer numero: "))
    num2 = int(input("Ingrese el segundo numero: "))
    suma = num1 + num2
    print("La suma es: ", suma)
  elif(opcion == 2):
    num1 = int(input("Ingrese el primer numero: "))
    num2 = int(input("Ingrese el segundo numero: "))
    resta = num1 - num2
    print("La resta es: ", resta)
  elif(opcion == 3):
    print("Gracias por usar la calculadora")
    break
  else:
    print("Ingrese valores dentro del rango")