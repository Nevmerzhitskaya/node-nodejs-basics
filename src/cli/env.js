const parseEnv = () => {
    let envString = '';

    for (const key in process.env) {
        if (key.startsWith('RSS_')) {
            envString += (envString != '') ? `; ` : ``;
            envString += `${key}=${process.env[key]}`;
        }
    }

    console.log(envString);
};

parseEnv();