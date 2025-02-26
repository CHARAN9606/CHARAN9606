def m_to_cm(m):
    return m * 100
def inch_to_centimeter(inch):
    return inch * 2.5


def find_maximum_number(numbers):
    maxium = numbers[0]
    for number in numbers:
        if number > maxium:
            maxium = number
    return maxium


