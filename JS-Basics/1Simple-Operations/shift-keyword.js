function print(input)
{
var name = input.shift();
var age = Number(input.shift());
console.log(name + " " + age);
}

print(["Misho", 50]);

