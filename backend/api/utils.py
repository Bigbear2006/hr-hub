import random
import string


def generate_login():
    characters = string.ascii_letters + string.digits
    return ''.join(random.sample(characters, 8))


def generate_password():
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.sample(characters, 12))
