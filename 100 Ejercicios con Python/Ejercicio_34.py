#Verificar si la longitud de una cadena de texto es mayor o igual a 10 caracteres.
cadena = str(input("Ingrese un año: "))
largoCadena = len(cadena)

if largoCadena >= 10:
  print("La cadena es mayor o igual a 10 caracteres.")
else:
  print("La cadena es menor a 10 caracteres.")