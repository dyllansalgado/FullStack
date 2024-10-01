#Validar si un año recibido es bisiesto.
#Para que un año sea bisiesto, debe cumplir las siguientes reglas:

#1. Es divisible entre 4: Si el año es divisible entre 4, es potencialmente bisiesto.
#2. No es divisible entre 100.
#3. Es divisible entre 400: Si el año es divisible entre 100, no es bisiesto, a menos que también sea divisible entre 400.
n = int(input("Ingrese un año: "))

if (n%4 == 0 and n%100 != 0) or (n%400 == 0):
    print(f"La fecha {n} es bisiesta.")
else:   
    print(f"La fecha {n} no es bisiesta.")
