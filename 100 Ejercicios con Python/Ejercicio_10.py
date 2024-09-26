#Recibir una cadena y devolverla invertida

frase = str(input("Ingrese una frase para invertir: "))

i = 1
fraseInvertida=""
largoFrase = len(frase)
while i <= largoFrase:
    fraseInvertida= fraseInvertida + frase[largoFrase-i] 
    i = i+1
print(fraseInvertida)