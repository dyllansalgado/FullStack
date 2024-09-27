#Reemplazar un carácter de una cadena por otro ingresado por el usuario

#Se solicita que el usuario ingrese la cadena

cadena = str(input("Ingrese una cadena de caracteres: "))

#Ahora se debe solicitar el caracter a modificar

caracterAModificar = int(
    input("Que letra o caracter desea modificar? Ingrese valor numerico: "))

#Se pasa a list la cadena para poder trabajarla.

listCadena = list(cadena)
while True:

  caracterInput = str(input("Ingrese UN caracter para modificarlo: "))
  if len(caracterInput) == 1:
    listCadena[caracterAModificar - 1] = caracterInput
    #Lo pasamos nuevamente a cadena, para eso utilizamos el metodo de listas join para unir la cadena
    cadena = str("".join(listCadena))
    break
  else:
    print("Ingrese un solo caracter")

print("La cadena modificada ha quedado: ", cadena)