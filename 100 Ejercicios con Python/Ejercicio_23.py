#Verificar si una palabra ingresada es un palíndromo.
#Ingrese cadena
cadena = str(input("Ingrese una palabra para verificar si es palindromo: "))
#Para que sea mas facil se puede pasar a lista para realizar las verificaciones.

cadenaList = list(cadena)
largoList = len(cadenaList)

i = 0
while i < largoList:
    if cadenaList[i] == cadenaList[largoList - i - 1]:
      #print(cadenaList[i])
      #print(cadenaList[largoList - i - 1])
      i = i + 1
      if i == largoList:
        print("La palabra es palindromo")
    else:
      print("La palabra no es palindromo")
      break
