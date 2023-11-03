// This work is licensed under CC BY-NC 4.0 
// very inefficient code x3 good luck understanding it


const fs = require("fs"); //for reading file
const ansi = require("m.easyansi");
const prompt = require("prompt-sync")({
    sigint: true
});
//for shell
var inFunction = false;
var savedReturn = 0;
var nameFunction = false;
var skipOverFunction = false;
var functions = {};
var points = {};
var sleepFind = false;
var sleep = false;
var placeAtI = 0;
var sleepTimer = 0;
var time_of_sleep = 0;
var variables = {
    "linebreak": "\n",
    "comma": ",",
    "cachedNumbers": "115105108108121032102111120032117119117",
    "screenwidth": process.stdout.columns,
    "screenheight": process.stdout.rows,
};
var commands = {
    "": function() {},
    "COM": function() {}, //comment
    "aa": function(text = "Hello World!") {
        console.log(text);
    },
    "ab": function(name) {
        variables[name] = 0;
    },
    "ac": function(name) {
        variables[name]++;
    },
    "ad": function(name) {
        variables[name]--;
    },
    "ae": function(name) {
        variables[name] = "";
    },
    "af": function(name, text) {
        variables[name] += text;
    },
    "ag": function(number) {
        return parseFloat(number);
    },
    "ah": function(one, two, goto) {
        if (parseFloat(one) > parseFloat(two)) {
            return parseFloat(goto);
        }
    },
    "ai": function(one, two, goto) {
        if (parseFloat(one) < parseFloat(two)) {
            return parseFloat(goto);
        }
    },
    "aj": function(one, two, goto) {
        if (parseFloat(one) == parseFloat(two)) {
            return parseFloat(goto);
        }
    },
    "ak": function(question, name) {
        variables[name] = prompt(question);
    },
    "al": function(name, number) {
        variables[name] *= parseFloat(number);
    },
    "am": function(name, number) {
        variables[name] /= parseFloat(number);
    },
    "an": function(name) {
        variables[name] = parseFloat(variables[name]);
    },
    "ao": function(one, goto) {
        if (parseFloat(one) % 2 == 0) {
            return parseFloat(goto);
        }
    },
    "ap": function(name) {
        variables[name] = Math.floor(variables[name]);
    },
    "aq": function(name) {
        variables[name] = Math.ceil(variables[name]);
    },
    "ar": function(name) {
        variables[name] = [];
    },
    "as": function(name, thing) {
        if (thing == parseFloat(thing)) {
            variables[name].push(parseFloat(thing));
        } else {
            variables[name].push(thing);
        }
    },
    "at": function(name, name2, num) {
        variables[name] = variables[name2][num];
    },
    "au": function(name) {
        return name
    },
    "av": function(name) {
        return parseFloat(points[name])
    },
    "aw": function(name, filename, type = "utf8") {
        variables[name] = fs.readFileSync(filename, type);
    },
    "ax": function(filename, text, flag = "w+") {
        fs.writeFileSync(filename, text, {
            flags: flag
        })
    },
    "ay": function(name, splitat) {
        variables[name] = variables[name].split(splitat)
    },
    "az": function(name, joinat) {
        variables[name] = variables[name].join(joinat)
    },
    "ba": function(x, y) {
        ansi.cursorTo(parseInt(x), parseInt(y))
    },
    "bb": function(name, out) {
        variables[out] = Math.sin(variables[name]);
    },
    "bc": function(name) {
        variables[name] += 0.1;
    },
    "bd": function(name) {
        variables[name] -= 0.1;
    },
    "be": function(name, number) {
        variables[name] = parseFloat(number)
    },
    "bf": function() {
        console.clear()
    },
    "bg": function(name, number) {
        variables[name] += parseFloat(number)
    },
    "bh": function(name, number) {
        variables[name] -= parseFloat(number)
    },
    "bi": function(name) {
        if (!inFunction) {
            nameFunction = true;
            skipOverFunction = true;
            return name
        }
    },
    "bj": function() {
        if (inFunction) {
            inFunction = false;
            return parseFloat(savedReturn) + 2
        }
    },
    "bk": function(name) {
        return [name]
    },
    "bl": function(one, two, func) {

        if (one > parseFloat(two)) {
            return [func];
        }
    },
    "bm": function(one, two, func) {
        if (one == parseFloat(two)) {
            return [func];
        }
    },
    "bn": function(one, two, goto) {
        if (variables[one] > variables[two]) {
            return parseFloat(goto)
        }
    },
    "bo": function(list, out) {
        variables[out] = variables[list].length
    },
    "bp": function(variable, text) {
        variables[variable] = text
    },
    "bq": function(one, two, func) {

        if (one < parseFloat(two)) {
            return [func];
        }
    },
    "br": function(milliseconds) {
        sleepFind = true;
        sleepTimer = parseFloat(milliseconds)
        time_of_sleep = new Date().getTime();
        return parseFloat(milliseconds)
    },
    "bs": function(name) {
        var file = fs.readFileSync(name + ".js", "utf8").split("//endcommand");
        for (x of file) {
            vars = x.split("variables ")[1].split(" startcommand")[0].split(",")
            vars.push(x.split("startcommand")[1])
            commands[x.split("//commandname ")[1].split(" variables")[0]] = new Function(...vars); //i need a better way to do this
        }
    },
    "bt": function(command) {
        commd = null
        try {
            commd = commands[get_command_name(command)](...get_command_arguments(command.replace(/;/g, ","))); //run command
        } catch (e) {
            console.log("syntax err");
        }
        return commd
    },
    "bu": function(v) {
        variables[v] = Math.sqrt(variables[v])
    },
    "bv": function(text, javascript) {
        commands[text] = new Function(javascript)
    },
    "bw": function(v) {
        variables[v] = Math.random();
    },
    "bx": function(v) {
        variables[v] = undefined
    },
    "by": function(v) {
        variables[v] = new Date();
    },
    "bz": function(v, num) {
        variables[v] = String.fromCharCode(parseInt(num))
    },
    "ca": function(v, a, b) {
        a = Math.ceil(a);
        b = Math.floor(b);
        variables[v] = Math.floor(Math.random() * (b - a + 1) + a);
    },
    "cb": function(v) {
        process.stdout.write(String.fromCharCode(variables[v]))
    },
    "ce": function(n) {
        variables[n] = prompt().charCodeAt(0);
    },
    "SOCKET": function(name) {
        switch (name) {
            case "functions":
                functions = {};
                break;
            case "points":
                points = {};
                break;
            case "variables":
                variables = {
                    "linebreak": "\n",
                    "comma": ","
                };
                break;
            case "commands":
                commands = {
                    "": function() {}
                };
                break;
            default:
                console.log("SOCKET " + name + " NOT FOUND. CANNOT CLEAR")
        }
    }

};

function passthrough(file) {

    Function(file)();
}

function get_command_name(fullcommand) { //get name of command
    return fullcommand.split(" ")[0];
}

function get_command_arguments(fullcommand) { //get arguments of command
    var args = "";
    if (fullcommand.split(get_command_name(fullcommand) + " ")[1] == undefined) { //if there's no arguments
        return []; //return nothing
    }
    args = fullcommand.split(get_command_name(fullcommand) + " ")[1].split(",");
    for (var i = 0; i < args.length; i++) {
        try {
            if (args[i].match(/%\w+%/g) != null) {
                for (varis of args[i].match(/%\w+%/g)) {
                    args[i] = args[i].split(varis).join(variables[varis.split("%").join("")])
                }
            }
        } catch (e) {
            continue;
        }
        try {
            args[i] = args[i].replace(/#\w+#/g, variables[args[i].match(/#\w+#/g)[0].split("#").join("")]);
        } catch (e) {
            continue;
        }
    }
    return args;
}

if (process.argv.length > 2) {
    var file = fs.readFileSync(process.argv[2], "utf8").split("\n");
    for (var i = 0; i < file.length; i++) {
        try {
            if (!skipOverFunction) {
                if (!sleep) {
                    commd = commands[get_command_name(file[i])](...get_command_arguments(file[i]));
                    switch (typeof commd) {
                        case "number":
                            if (sleepFind) {
                                placeAtI = i;
                                sleep = true;
                                sleepFind = false;
                            } else {
                                i = commd - 2;
                            }
                            break;
                        case "string":
                            if (nameFunction) {
                                functions[commd] = i + 1;
                                nameFunction = false;
                            } else {
                                points[commd] = i + 1
                            }
                            break;
                        case "object":
                            savedReturn = i
                            i = functions[commd[0]] - 2
                            inFunction = true;
                    }
                } else {
                    if (time_of_sleep + sleepTimer < new Date().getTime()) {
                        sleep = false;
                        i -= 1
                    } else {
                        i = placeAtI
                    }
                }
            } else if (get_command_name(file[i]) == "bj") {
                skipOverFunction = false;
            }
        } catch (e) {
            console.log("** INTERNAL ERROR AT LINE " + (i + 1) + ": " + e);
        }
    }
} else {
    console.log("welcome to 2let shell");
    console.log("type .endprom to stop the program");
    var command = "";
    while (command != ".endprom") {
        command = prompt(">");
        try {
            commands[get_command_name(command)](...get_command_arguments(command)); //run command
        } catch (e) {
            console.log("syntax err");
        }
    }
}
