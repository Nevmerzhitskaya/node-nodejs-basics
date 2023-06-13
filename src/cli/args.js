const parseArgs = () => {
    const argv = process.argv;
    let argString = '';

    for (let i = 0; i < argv.length; i++) {
        if (argv[i].startsWith('--') && argv[i + 1]) {
            argString += (argString != '') ? `, ` : ``;
            argString += `${argv[i].substring(2)} is ${argv[i + 1]}`;
            i++;
        }
    }

    console.log(argString);
};

parseArgs();