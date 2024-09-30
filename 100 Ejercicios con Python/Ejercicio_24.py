#Eliminar un elemento específico dado de una lista ingresada.

lista = []
bandera = 1
while bandera == 1:
  elementos = str(input("Ingrese elementos a la lista: "))
  lista.append(elementos)
  while True:
    respuesta = input("Quiere seguir agregando valores? si/no:")
    if respuesta.lower() == "si":
      break
    elif respuesta.lower() == "no":
      bandera = 0
      break
    else:
      print("Ingrese solo respuestas permitidas")
#Se procede a calcular el promedio
EleccionAEliminar = str(input("Ingrese el elemento que desea eliminar: "))
lista.remove(EleccionAEliminar)
print(lista)