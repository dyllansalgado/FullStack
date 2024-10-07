#Utilizando POO, simular una cuenta bancaria con depositos y retiros, con atributo saldo y titular.	

class CuentaBancaria:
    def __init__(self, titular, saldo_inicial=0):
        self.titular = titular
        self.saldo = saldo_inicial
        
    def depositar(self, cantidad):
        if cantidad > 0:
            self.saldo = self.saldo + cantidad
            print(f"Deposito de {cantidad} realizado. Nuevo saldo: {self.saldo}.")
        else:
            print("La cantidad a depositar debe ser mayor que cero.")

    def retirar(self, cantidad):
        if cantidad > 0:
            if cantidad <= self.saldo:
                self.saldo = self.saldo - cantidad
                print(f"Retiro de {cantidad} realizado. Nuevo saldo: {self.saldo}.")
            else:
                print("Fondos insuficientes para realizar el retiro.")
        else:
            print("La cantidad a retirar debe ser mayor que cero.")

    def mostrar_saldo(self):
        return self.saldo
        
cuenta = CuentaBancaria("Dyllan", 1000)
print(f"Bienvenido {cuenta.titular} su saldo es de: ", cuenta.mostrar_saldo())


while True:
    print('''
    ¿Que operacion desea ejecutar hoy?
    1. Depositar
    2. Retirar
    3. Salir 
    ''')
    eleccion = int(input("Su eleccion: "))
    if eleccion == 1:
        valor = int(input("¿Cuanto desea depositar? : "))
        cuenta.depositar(valor)
    elif eleccion == 2:
        valor = int(input("¿Cuanto desea retirar? : "))
        cuenta.retirar(valor)
    elif eleccion == 3:
        break
    else:
        print("Ingrese un valor esperado")
        