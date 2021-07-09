// 4. Write a JavaScript program to display the reading status 
// (i.e. display book name, author name and reading status) of the following books. 
// var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
// { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
 
console.log('The author names are : ');
for(var i=0; i< library.length; i++){
    console.log(library[i].title);
}

console.log('The author names are : ');
for(var i=0; i< library.length; i++){
    console.log(library[i].author);
}

console.log('The author names are : ');
for(var i=0; i< library.length; i++){
    console.log(library[i].readingStatus);
}



console.log('The required output is : ');
for(var i=0; i< library.length; i++){
    console.log('Th author of the book ', library[i].title, 'is', library[i].author, 'and the reading staus is', library[i].readingStatus);
}