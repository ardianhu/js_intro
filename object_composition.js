// object composition mempunyai fungsi yang sama dengan inheritance, yaitu untuk menghindari duplikasi kode
// tetapi mempunyai cara kerja yang berbeda.
// sebagai contoh dalam developer terdapat front-end, back-end, dev-ops, dan full-stack
// kira2 begini jika kita menggunakan pewarisan atau inheritance.
// class Developer {
//     constructor(name) {
//       this.name = name;
//     }
   
//     commitChanges() {
//       console.log(`${this.name} is committing changes...`);
//     }
//   }
   
//   class FrontEndDeveloper extends Developer {
//     buildUI() {
//       console.log(`${this.name} is building UI...`);
//     }
//   }
   
//   class BackEndDeveloper extends Developer {
//     buildAPI() {
//       console.log(`${this.name} is building API...`);
//     }
//   }
   
//   class DevOps extends Developer {
//     deployApp() {
//       console.log(`${this.name} is deploying app...`);
//     }
//   }
// so what about full-stack that can buildUI and buildAPI and deployApp?
// dengan inheritance kita bisa menambahkan kode seperti di bawah ini
// class FullStackDeveloper extends Developer {
//     buildUI() {
//       console.log(`${this.name} is building UI...`);
//     }
    
//     buildAPI() {
//       console.log(`${this.name} is building API...`);
//     }
    
//     deployApp() {
//       console.log(`${this.name} is deploying app...`);
//     }
//    }
// and this isn't effective and efficient at all
// di pewarisan di atas kita membagikan class terhadap peran
// di object composition kita akan membagi berdasarkan kemampuan yang dapat dilakukan
class Developer {
    constructor(name) {
        this.name = name;
    }
    commitChanges() {
        console.log(`${this.name} is commiting changes...`)
    }
}
function canBuildUI(developer) {
    return {
        buildUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}
function canBuildAPI(developer) {
    return {
        buildAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}
function canDeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        }
    }
}
// setelah itu kita akan membuat sebuah fungsi sebagai object creator dengan mengmposisikan kemampuan yang dibutuhkan. dengan menggunakan Object.assign().

function createFrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer));
}
function createBackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildAPI(developer));
}
function createDevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}
function createFullStackDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUI(developer), canBuildAPI(developer), canDeployApp(developer));
}
const FrontEndDeveloper = createFrontEndDeveloper('jack');
FrontEndDeveloper.commitChanges();
FrontEndDeveloper.buildUI();
console.log(`is ${FrontEndDeveloper.name} developer?`, FrontEndDeveloper instanceof Developer);