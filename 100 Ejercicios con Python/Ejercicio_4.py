#Cree una lista de n elementos e imprimirlos

n = int(input("Ingrese el tamaño de la lista: "))
lista = []
i = 0
while i < n:
    valor = input("Ingrese lo que desea añadir a la lista: ")
    lista.append(valor)
    i = i+1

print("La lista creada es: ",lista)
