#Unión e intersección de sets ingresados por el usuario.
# Solicitar al usuario los conjuntos
set1 = set(
    input("Ingresa los elementos del primer conjunto separados por comas: ").
    split(","))
set2 = set(
    input("Ingresa los elementos del segundo conjunto separados por comas: ").
    split(","))

# Unión de los conjuntos
union = set1.union(set2)

# Intersección de los conjuntos
interseccion = set1.intersection(set2)

# Mostrar los resultados
print(f"Unión: {union}")
print(f"Intersección: {interseccion}")
