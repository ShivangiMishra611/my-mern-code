const movies = [ 'Shinchan', 'Tom & Jerry', 'Doremon', 'Ninja Hathori', 'Pokemon' ];

// getting the array length
console.log( movies.length );

// getting a single element from array
console.log( movies[1] );
console.log( movies[3] );

// getting multiple elements from array
console.log(movies.slice( 1, 4 ));

// Adding new element
movies.push('Ben 10');

console.log(movies);

// removing last element
movies.pop();

console.log(movies);

// removing multiple element
movies.splice( 1, 2 );

console.log(movies);

console.log( movies.indexOf("Pokemon") );