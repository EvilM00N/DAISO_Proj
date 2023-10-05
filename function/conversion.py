import roman

class Conversion:
    def __init__(self,input):
        self.input = input

    def RomanToArabic(self):
        roman_numeral = self.input
        try:
            arabic_numeral = str(roman.fromRoman(roman_numeral))
            return True, arabic_numeral
        except roman.InvalidRomanNumeralError:
            return False, "Invalid Roman Numeral"
        
        
        

