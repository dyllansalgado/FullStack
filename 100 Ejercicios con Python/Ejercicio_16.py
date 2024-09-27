#	Calcular una base ingresada a un exponente ingresado, sin utilizar el operador **.

#Aca se puede hacer de forma manual o utilizar math.
#de forma manual se deben usar ciclos.

#potencias de dos números ingresados por usuario.

print("Bienvenido a la calculadora que solo calcula potencias")
print("-"*50)
num1 = int(input("Ingrese el primer valor a elevar: "))
num2 = int(input("Ingrese el segundo valor correspondiente al elevado: "))

resultado = 1
#Se usa el ciclo for que permite iterar la cantidad del elevado.
#Primer ciclo seria 0 de 0,1,2
# resultado = 1*3 = 3
#Segundo ciclo seria 1 de 0,1,2
#resultado = 3*3 = 9
#tercer ciclo seria 2 de 0,1,2
#resultado = 9*3 = 27
for i in range(num2):
  resultado =  resultado * num1
print("El resultado de la potencia es: ", resultado)