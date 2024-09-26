#Calcular promedio de una lista de numero ingresada por el usuario.

lista = []
bandera = 1
while bandera == 1:
    valor = int(input("Ingrese valores a la lista para calcular su promedio: "))
    lista.append(valor)
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
n = 0
suma = 0
tamañoLista = len(lista)
while n < tamañoLista:
    suma = lista[n] + suma
    n = n+1
promedio = suma/tamañoLista
print(f"La lista de valores quedo: {lista} y el promedio es: {promedio} ")
            
            
    
