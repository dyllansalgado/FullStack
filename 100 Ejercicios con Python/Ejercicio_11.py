#Calcular el área de un rectángulo con una base y un área ingresada por el usuario.

print("Bienvenido a la calculadora que obtiene el área de un rectangulo")
print("-"*50)
num1 = int(input("Ingrese el valor del lado a: "))
num2 = int(input("Ingrese el valor del lado b: "))

area = num1 * num2
print("-"*50)
print("El resultado del área del rectangulo con lado de lado ", num1, " y lado ", num2, " es de: ", area)