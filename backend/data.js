impo

const data={
  users:[
    {
      name:'Basir',
      email:'admin@example.com',
      password:bcrypt.hashAsync('1234',8)
    }
  ],
    products:[
        {
            _id:'1',
            name: 'Nike Slim Shirt',
            slug:'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            _id:'2',
            name: 'Adidas Fit Shirt',
            slug:'adidas-fit-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 1,
            numReviews: 10,
            description: 'high quality product',
          },
          {
            _id:'3',
            name: 'Lacoste Free Shirt',
            slug:'lacoste-free-shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 2,
            numReviews: 17,
            description: 'high quality product',
          },
          {
            _id:'4',
            name: 'Nike Slim Pant',
            slug:'nike-slim-pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product',
          },
         
         
    ],
};

export default data;