class Appliances:
    def __init__(self,quantity: int, wattage : float):
        self.total = quantity * wattage


def displayAppliances(room: dict, quantity, wattage):
    print('\n---------------------------------------------')
    print(f'{"Appliances":<15} {"Quantity":<10} {"Wattage":<10} {"Total Wattage":<15}')
    for app, twattage in room.items():
        print(f'{app:<15} {quantity:<10} {wattage:<10} {twattage:<15}')
    print('---------------------------------------------')


def main():
    roomName = input("Enter the name of the room : ")
    # this will keep track the type of appliances as key and the total wattage as value
    room = {}

    while True:
        try:
             appliances = input(f"Enter the appliances in {roomName} : ")
             quantity = int(input(f"Enter the number of the {appliances} : "))
             wattage = float(input(f"Enter the wattage of the {appliances} : "))

             room[appliances] = Appliances(quantity, wattage).total
             stop = input("Do you wanna add another appliances? (press done to exit): ")
             if stop.lower() == 'done': break

        except ValueError:
            print("invalid input try again!")

    total_wattage = sum(room.values())
    displayAppliances(room, quantity, wattage)
    print(f'Total wattange in {roomName}: {total_wattage}')


if __name__ == '__main__':
    main()




