#Imprimir los números del 1 al 5 en orden descendente
print("Imprimir los números del 1 al 5 en orden descendente")
lista = [1,2,3,4,5]
descendente = []
print("La lista de numeros es: ", lista)
print("Se procede a imprimir los valores descendentemente:")
for i in range(len(lista)):
  print(f"{i+1}: {lista[len(lista)-1-i]}")