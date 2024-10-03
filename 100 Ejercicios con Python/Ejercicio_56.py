#Listar los números del 1 al 10 y calcular el cuadrado usando el ciclo for.
print("Listar los números del 1 al 10 y calcular el cuadrado usando el ciclo for. ")
lista = [1,2,3,4,5,6,7,8,9,10]
listaCuadrada = []
print("La lista de numeros es: ", lista)
print("Se procede a calcular la potencia:")
for i in range(len(lista)):
  potencia = lista[i]**2
  listaCuadrada.append(potencia)
  print(f"El cuadrado de {i+1} es: {potencia}")

print(f"La lista original es {lista} y la lista cuadrada quedo: {listaCuadrada}")