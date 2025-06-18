my_fav_numbers={3, 7, 21, 42}

my_fav_numbers.add(55)
my_fav_numbers.add(20)

print(my_fav_numbers)
my_fav_numbers.remove(55)
my_fav_numbers.remove(20)

print(my_fav_numbers)
friend_fav_numbers={20,3,19,8,4,3}
our_fav_numbers=friend_fav_numbers.union(my_fav_numbers)

print(our_fav_numbers)