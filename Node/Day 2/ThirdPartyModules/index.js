const chalk = require('chalk');
const validate = require('validator');

const log =console.log;

log(chalk.blue('Third Party Module Loaded Successfully!'));
log(chalk.green('You can now use chalk for colored console output!'));
log(chalk.yellow('This is a yellow message!'));

const email = 'devprasath@gmail.com';
if (validate.isEmail(email)) {
    log(chalk.green(`The email address ${email} is valid.`));
}
else {
    log(chalk.red(`The email address ${email} is invalid.`));
}

