//Ex 01
const StringFormatter = function() {
    const capitalizeFirst =  str => console.log(str.charAt(0).toUpperCase() + str.toLowerCase().slice(1));

    const skewerCase = (str) => {
        const regex = / /gi;
        const newStr = str.replace(regex, '-');
        console.log(newStr);
    }

    return {
        capitalizeFirst,
        skewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should print Dorothy
formatter.skewerCase("blue box") //should print blue-box

//Ex 02
const Bank = () => {
    let money = 500;

    const depositCash = (cash) => money += cash;

    const checkBalance = () => console.log(money);

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

//Ex 03
const SongsManager = () => {
    const songs = {}

    const addSong = (name, url) => {
        const index = url.indexOf('=');
        const id = url.slice(index + 1);

        songs[name] = id;
    }

    const getSong = (name) => console.log(`https://www.youtube.com/watch?v=${songs[name]}`);

    return {
        addSong,
        getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ