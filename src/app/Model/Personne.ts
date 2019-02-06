export class Personne {
  id;
  name;
  firstname;
  job;
  age;
  path;

constructor (id = 0, name = 'sara',  firstname = 'dridi',  job = 'pharma' ,  age = '29',  path = 'img1.png') {
  this.id = id;
  this.name = name;
  this.firstname = firstname;
  this.job = job;
  this.age = age;
  this.path = path;
 }
}
