let obj = {};
const uniquify = (fileNames) => {
   
    return fileNames.map((filename) => {
          let res = filename
          if(obj.hasOwnProperty(filename)) res = findNextAvailale(filename)
          obj[filename] = true
          return res;
    });
}

const findNextAvailale = (name) => {
    let counter = 1
    let temp = name;
    
    while(obj.hasOwnProperty(name)) {
        // if(name.findIndex("(")) 
        name = `${temp}(${counter})`
        counter++;
    }
    return name;
}

// const fileNames = ["Valorant","Valorant(1)","Valorant","Valorant(2019)"];
const fileNames = ["naruto","naruto(1)","naruto(2)","naruto(3)", "naruto"]
console.log(uniquify(fileNames))

