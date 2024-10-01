#Calcular el IMC e interpretarlo.

#Ingrese cadena para verifcar si es python.
peso = float(input("Ingrese su peso en kilogramos: "))
altura = float(input("Ingrese su altura en metros: "))

#Calcular IMC: es peso / altura al cuadrado

IMC = peso / (altura**2)

#Interpretación de IMC

#Bajo peso: IMC < 18.5
#Peso normal: 18.5 ≤ IMC < 24.9
#Sobrepeso: 25 ≤ IMC < 29.9
#Obesidad: IMC ≥ 30
if IMC < 18.5:
    print(f"Su IMC es: {IMC} lo que es menor a 18.5, por lo tanto se encuentra en bajo peso")
elif 18.5 <= IMC and IMC < 24.9: 
    print(f"Su IMC es: {IMC} lo que es mayor o igual a 18.5 y menor a 24.9, por lo tanto se encuentra en peso normal")
elif 25 <= IMC and IMC < 29.9: 
    print(f"Su IMC es: {IMC} lo que es mayor o igual a 25 y menor a 29.9, por lo tanto se encuentra en sobrepeso")
else:
    print(f"Su IMC es: {IMC} lo que es mayor a 30, por lo tanto se encuentra en obesidad")
