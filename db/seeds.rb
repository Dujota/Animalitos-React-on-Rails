# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
animals = [
  {
    name: 'COW',
    image:
      'https://images.unsplash.com/photo-1505234835397-49b5a3913c67?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    icon: 'images/cow.svg',
    bg_color: '#0B90AA',
    sound: 'sounds/cow.mp3'
  },
  {
    name: 'ROOSTER',
    image:
      'https://images.unsplash.com/photo-1462027076063-1ceabb252dbd?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    icon: 'images/rooster.svg',
    bg_color: '#04384A',
    sound: 'sounds/rooster.mp3'
  },
  {
    name: 'HORSE',
    image:
      'https://images.unsplash.com/photo-1506499198854-612d9708e463?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    icon: 'images/horse.svg',
    bg_color: '#0B90AA',
    sound: 'sounds/horse.wav'
  },
  {
    name: 'DOG',
    image:
      'https://images.unsplash.com/photo-1503324280674-50695c3ae35f?auto=format&fit=crop&w=934&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    icon: 'images/dog.svg',
    bg_color: '#04384A',
    sound: 'sounds/dog.wav'
  }
]

animals.each do |animal|
  Animal.create!(animal)
end
