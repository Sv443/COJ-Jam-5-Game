const jsl = require("svjsl");

const interval = 300; // in ms

const anim = Object.freeze([
    [
        `  o /¯`,
        ` _/|`,
        `  / \\`
    ],
    [
        `   o`,
        `  /|\\`,
        `  / \\`
    ],
    [
        ` ¯\\ o`,
        `   |\\_`,
        `  / \\`
    ],
    [
        `   o`,
        `  /|\\`,
        `  / \\`
    ],
]);

function mainMenu()
{
    let mp = new jsl.MenuPrompt({
        autoSubmit: true,
        exitKey: "x",
        onFinished: results => {
            if(results[0].optionIndex == 0)
            {
                let currentFrame = 0;
                setInterval(() => {
                    if(currentFrame == anim.length)
                        currentFrame = 0;
                    
                    showFrame(currentFrame);
                    currentFrame++;
                }, interval);
            }
        }
    });

    mp.addMenu({
        title: "game",
        options: [
            {
                "key": "p",
                "description": "play"
            }
        ]
    });

    mp.open();
}

function showFrame(idx)
{
    console.clear();
    console.log("\n");
    anim[idx].forEach(line => {
        console.log(`    ${line}`);
    });
    console.log("\n");
}

mainMenu();