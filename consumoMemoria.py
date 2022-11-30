import sys, resource

class Person(object):
    def __init__(self, first_name, last_name, age, gender):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.gender = gender

	def get_size(obj, seen=None):
	    """Encuentra recursivamente el tamaño de los objetos"""
	    size = sys.getsizeof(obj)
	    if seen is None:
	        seen = set()
	    obj_id = id(obj)
	    if obj_id in seen:
	        return 0
	    # Marca importante como se ve *antes* de ingresar la recursividad para manejar con gracia
	    # objetos autorreferenciales
	    seen.add(obj_id)
	    if isinstance(obj, dict):
	        size += sum([get_size(v, seen) for v in obj.values()])
	        size += sum([get_size(k, seen) for k in obj.keys()])
	    elif hasattr(obj, '__dict__'):
	        size += get_size(obj.__dict__, seen)
	    elif hasattr(obj, '__iter__') and not isinstance(obj, (str, bytes, bytearray)):
	        size += sum([get_size(i, seen) for i in obj])
	    return size

	def rec(n):
		print(n)
		rec(n+1)

	print(sys.getrecursionlimit())
	sys.setrecursionlimit(1000000000)
	print(sys.getrecursionlimit())
	print(resource.getrlimit(resource.RLIMIT_STACK))
	rec(1)
	sys.setrecursionlimit(1000000000)
	resource.setrlimit(resource.RLIMIT_STACK, [resource.RLIM_INFINITY, resource.RLIM_INFINITY])

	def rec(n):
		print(n, resource.getrusage(RUSAGE_SELF).ru_maxrss / 1024)
		rec(n+1)
	rec(1)


	print(sys.getsizeof(1.0))                  # 24
	print(sys.getsizeof(""))                   # 49
	print(sys.getsizeof("Hello!"))             # 55
	print(sys.getsizeof(dict()))               # 240
	print(sys.getsizeof(dict({'A':1, 'B':2}))) # 240


	print(get_size(1.0))                  # 24
	print(get_size(""))                   # 49
	print(get_size("Hello!"))             # 55
	print(get_size(dict()))               # 240    
	print(get_size(dict({'A':1, 'B':2}))) # 396



	        
	print(get_size(Person("Gayleen", "Eccleshare", 33, 'Female')))


	person = Person("Gayleen", "Eccleshare", 33, 'Female')
	person.profession = 'Accounting'