


# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

# a2 + b2 = c2
# For example, 32 + 42 = 9 + 16 = 25 = 52.

# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

def checkTrip(a, b, c):
    if (a * a) + (b * b) == (c * c) :
        return True
    else:
        return False

a = 0
while a < 500:
    a += 1
    b = a + 1
    while b < 500:
        c = 1000 - (a + b)
        if checkTrip(a, b, c) == False :
            b += 1
        else:
            product = a*b*c
            print(a, b, c)
            print(product)
            break

                
# Assume two strings str1, str2, where str2 contains the same set of characters in str1 with one additional character. Find the signal different character between the two strings.

# Examples:

# 'abcd', 'abcde' -> 'e'
# 'aaabbcdd', 'abdbacade' -> 'e'

def difference(str1, str2):
    for char in str2:
        if char in str1:
            pass
        else:
            return char


print(difference("abcd", "abcde"))