from function.conversion import Conversion


if __name__ == "__main__":
    value = Conversion(" ").RomanToArabic()
    val_type = type(value)
    print(val_type)
    print(value)