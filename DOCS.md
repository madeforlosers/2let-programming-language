# the documentation for 2let!!!!!!!!!!

# Table of contents

- [quick info on this file](#quick-info-on-this-file)
- [a quick look on syntax](#a-quick-look-on-syntax)
  - [command arguments](#command-arguments)
  - [variables](#variables)
- [simple things](#simple-things)
  - ["usage" argument legend](#usage-argument-legend)
  - [comments](#comments)
  - [displaying stuff to terminal](#displaying-stuff-to-terminal)
  - [clearing the console](#clearing-the-console)
  - [variables](#variables)
  - [numbers](#numbers)
  - [Strings](#strings)
  - [Lists](#lists)
  - [points](#points)
  - [functions](#functions)
  - [goto command](#goto-command)
- [a little more complicated stuff](#a-little-more-complicated-stuff)
  - [if statements](#if-statements)
  - [moving the cursor](#moving-the-cursor)
  - [prompting the user](#prompting-the-user)
  - [wait command](#wait-command)


# quick info on this file
run `node 2let.js [filename]` to run a program. if not given a filename, it will go to the shell.


# a quick look on syntax
syntax is weird in 2let.

## command arguments
arguments are pretty simple. they're seperated by a comma (dont use spaces as well). heres an example:

```
ca a,2,4
```

*sets variable "a" to a number between 2 and 4. using "ca"*

because of 2let limitations, you cant use a regular comma in a string. if you want to use a comma in a string, use %comma% instead
## variables
this is a little complicated. 

*don't know how to set variables? scroll down a bit and look for the Variables section in "simple stuff"*

so theres 2 sides of arguments. **variable-required** and **variable-optional**. dont worry, i'll tell you what arguments are which . 

on **variable-optional** arguments, you'll need to use percentage signs around the variable name to use variables. like this `%variable%`. 

on **variable-required** arguments, you HAVE to put a variable, but you can just put the variable name with no percentage signs.

example of using a variable in a **variable-optional** argument
```
aa hello %name%!
```

*if "name" is defined, it will say "hello " and then whatever "name" is*


example of using a variable in a **variable-required** argument:
```
ak what's your name? ,name
```

*in this, the second argument is the variable-required argument. the first one is a string argument.*



# simple things

## "usage" argument legend

in sections where i show the usage of the command, there will be a set of stuff to show the name,type, and if its variable-required or not, all seperated by a line (|). if i'm referring to 2 commands that have the same usage, the command in the usage wont be there.

```
command [name|type|variable-required]
       
```

since the name and command is self explanatory, heres the type.

### type

the type is what the argument is. string, list, number, etc. except its abbreviated. like this:

|word|abbreviation|
|-|-|
|string|str|
|number|num|
|list|lis|
|point|poi|
|function|fun|
|variable|var|
|anything/object|obj|

### variable-required or not

its either gonna say "req" or "opt" for required and optional variables respectively. basically when you see "req" that means you just put a variable name.

heres an example:
```
aa [output|string|opt]
```


### referring to a certain argument

When I'm referring to an argument, i'll put brackets around the name. like [this].

## comments
if you want to do comments, you use `COM`. pretty much it. example:
```
COM this is a comment
```



## displaying stuff to terminal
if you need to display stuff, use `aa`. usage:
```
aa [output|string|opt]
```

## clearing the console
use `bf`. you dont need usage

## variables

### declaring

there are different commands for declaring different variables.

**ab** is number, **ae** is string, 
**ar** is list, **au** is point,
**bi** is function, and **by** is Date.

we will get into points later. 
all of them follow this usage:
```
[variable name|string|opt]
```

## numbers 

### adding to number variable

if you want to add to a number variable, theres 3 things you can do.

#### `ac`

this adds 1 to [variable]. usage:
```
ac [variable|num|req]
```

#### `bc`

this adds 0.1 to [variable]. usage:
```
bc [variable|num|req]
```

#### `bg`

this adds [number] to [variable]. usage:
```
bg [variable|var|req],[number|num|opt]
```

### subtracting to number variable

theres also 3 things you can do.

#### `ad`
this subtracts 1 from [variable]. usage:
```
ad [variable|num|req]
```

#### `bd`
this subtracts 0.1 from [variable]. usage:
```
bd [variable|num|req]
```

#### `bh`
this subtracts [number] from [variable]. usage:

```
bh [variable|num|req],[number|num|opt]
```

### multiplying

use `al`. this multiplies [variable] by [number] usage:
```
al [variable|num|req],[number|num|opt]
```

### dividing

use `am`. this divides [variable] by [number]. usage:
```
am [variable|num|req],[number|num|opt]
```

### flooring and ceiling

use `ap` and `aq` for flooring and ceiling (respectively). they both have this usage:
```
[variable|num|req]
```

### setting number variable to set number

use `be`. this sets [variable] to [number]. usage:
```
be [variable|num|req],[number|num|opt]
```

### converting string to number

use `an`. this converts [variable] to number (float). usage:
```
an [variable|str|req]
```

###  sine function

use `bb`. this sets [output] to sin([input]). usage:
```
bb [input|num|req],[output|var|req]
```

### square rooting

use `bu`. this sets [variable] to the square root of itself. usage:
```
bu [variable|num|req]
```

### random numbers

theres 2 different random number commands. `bw` and `ca`.

`bw` is the same as Math.random(), outputs it to [output]. usage:
```
bw [output|num|req]
```

`ca` generates a number between [min] and [max], and outputs it to [output]. usage:
```
ca [output|num|req],[min|num|opt],[max|num|opt]
```

## Strings

this wont be as long as the numbers.

### adding text to string variable

use `af`. this adss [string] as [variable]. usage:
```
af [variable|str|req],[string|str|opt]
```

### splitting string

use `ay`. this splits [variable] on every occurence of [string]. usage:
```
ay [variable|str|req],[string|str|opt]
```

### setting variable to string

use `bp`. this sets [variable] as [string]. usage:
```
bp [variable|var|req],[string|str|opt]
```

## Lists

### pushing to list

use `as`. this pushes [object] into [list]. usage:
```
as [list|lis|req],[object|obj|opt]
```

### getting object from list

use `at`. this gets the contents of [list] at index [index] and sets it as [output]. usage:
```
at [output|var|req],[list|lis|req],[index|num|opt]
```

### joining list into string

use `az`. this joins [list] into a string. usage:
```
az [list|lis|req]
```

### getting list length

use `bo`. this gets the length of [list] and outputs it to [output]. usage:
```
bo [list|lis|req],[output|num|req]
```

## points

use `au [point name|str|opt]` to set a point and use `av [point name|poi|req]` to go to it.

## functions

functions are a little complicated.

use `bi [function name|str|opt]` to declare a function, use `bj` as a return, and use `bk [function name|fun|req]` to call it. ask me for help im too lazy to write it right now


## goto command

use `ag` as a goto command. usage:
```
ag [line number|num|opt]
```

# a little more complicated stuff
its getting a harder (thats what he said bahahahahahahahahahahah)

## if statements
this is a little hard.,
theres 2 different versions of each if command. the "goto" ones and the "function" ones. "goto" ones act like the `ag` command if the statement is true, and the "functions" one act like the `bk` command if the statement is true.

### "goto" ones

#### higher

use `ah`. this checks if [v1] is higher than [v2], and if it is, it goes to line [line]. usage: 
```
ah [v1|num|opt],[v2|num|opt],[line|num|opt]
```

#### lower

use `ai`. this checks if [v1] is lower than [v2], and if it is, it goes to line [line]. usage: 
```
ai [v1|num|opt],[v2|num|opt],[line|num|opt]
```

#### equal

use `aj`. this checks if [v1] is equal to [v2], and if it is, it goes to line [line]. usage: 
```
aj [v1|obj|opt],[v2|obj|opt],[line|num|opt]
```

### "function" ones

#### higher

use `bl`. this checks if [v1] is higher than [v2], and if it is, it goes to function [function]. usage: 
```
bl [v1|num|opt],[v2|num|opt],[function|fun|req]
```

#### lower

use `bq`. this checks if [v1] is lower than [v2], and if it is, it goes to function [function]. usage: 
```
bq [v1|num|opt],[v2|num|opt],[function|fun|req]
```

#### equal

use `bm`. this checks if [v1] is equal to [v2], and if it is, it goes to function [function]. usage: 
```
bm [v1|obj|opt],[v2|obj|opt],[function|fun|req]
```

## moving the cursor

use `ba`. this moves the cursor to the position of [x] and [y] on the CLI. usage:
```
ba [x|num|opt],[y|num|opt]
```

## prompting the user
use `ak`. this prompts the user with the question [question] and sets it to the variable [output]. usage:
```
ak [question|str|opt],[output|str|req]
```

## wait command
use `br`. this makes the user wait [time] amount of milliseconds. usage:
```
br [time|num|opt]
```

ok im done.. if you're curious just read the code and you'll see more commands i havent explained here. look in /programs/ for examples. ok byebye!!!!!!!!!! :3

