#!/usr/bin/env node

const getopt = require('node-getopt');
const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

/*
 * V1 LBC Actions generator
 */
const options = [
    ['n', 'name=ARG', 'generate a complete fetch action. Must be in capitalized format, ex: LeBonCoin'],
    ['c', 'create', 'create files in the current directory'],
    ['f', 'force', 'allow overriding of state directory & files'],
    ['h', 'help', 'display this help'],
    ['v', 'version', 'show version']
];

const opt = getopt
    .create(options)
    .bindHelp()
    .parseSystem()
;

String.prototype.toCapitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.toCamelCase = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

String.prototype.toConst = function () {
    return (this.charAt(0) + this.slice(1).replace(/([A-Z])/g, '_$1')).toUpperCase();
}

String.prototype.isLowerCase = function () {
    return this == this.toLowerCase();
}

String.prototype.isUpperCase = function () {
    return this == this.toUpperCase();
}

const name = opt.options.name ? opt.options.name : null;
const create = !!opt.options.create;
const force = !!opt.options.force;
const version = opt.options.version ? opt.options.version : null;

if (name && name.charAt(0).isLowerCase()) {
    name = name.toCapitalize();
}

if (version) {
    return (console.log('1.0.0'));
}

function puts (error, stdout, stderr) {
    if (stderr) {
        console.log(stderr);
    }
}

if (name) {
    const templateDirectory = path.join(__dirname, 'assets');
    const files = [
        {
            target: 'index.js',
            type: 'core'
        },
        {
            target: 'actions.js',
            type: 'core'
        },
        {
            target: 'index.spec.js',
            type: 'tests'
        },
        {
            target: 'actions.spec.js',
            type: 'tests'
        }
    ];
    let loopCount = files.length;

    const actionNameCamelizedRegexp = /\$\{ACTION_NAME_CAMELIZED\}/g;
    const actionNameCamelized = name.toCamelCase();

    const actionNameUppercaseRegexp = /\$\{ACTION_NAME_UPPERCASE\}/g;
    const actionNameUppercase = name.toConst();

    const actionImportNameRegexp = /\$\{ACTION_IMPORT_NAME\}/g;
    const actionImportName = name;

    const actionNameCapitalizedRegexp = /\$\{ACTION_NAME_CAPITALIZED\}/g;
    const actionNameCapitalized = name;

    const targetDirectory = path.join(process.cwd(), actionNameCamelized);
    
    // needs to create the state directory
    if (create && !fs.existsSync(targetDirectory)) {
        fs.mkdirSync(targetDirectory);
    }

    const testsDirectory = path.join(targetDirectory, '__tests__');

    // needs to create the tests directory
    if (create && !fs.existsSync(testsDirectory)) {
        fs.mkdirSync(testsDirectory);
    }

    for (let file of files) {
        fs.readFile(path.join(templateDirectory, file.target), 'utf8', function (err, template) {
            if (err) {
                console.log(err);
                process.exit(1);
            }

            const output = template
                .replace(actionNameCamelizedRegexp, actionNameCamelized)
                .replace(actionNameUppercaseRegexp, actionNameUppercase)
                .replace(actionImportNameRegexp, actionImportName)
                .replace(actionNameCapitalizedRegexp, actionNameCapitalized)
            ;

            const targetFileDirectory = file.type === 'core' ? targetDirectory : testsDirectory;
            const filePath = path.join(targetFileDirectory, file.target);

            if (create) {
                if (!fs.existsSync(filePath) || force) {
                    fs.writeFileSync(filePath, output);
                } else {
                    console.log(`The file '${filePath}' already exists, use --force to override`);
                    process.exit(1);
                }
            } else {
                console.log(`You can now copy this output code into '${filePath}' : \n${output}`);
            }

            if (!(--loopCount)) {
                console.log(`Don't forget to add your new reducer in reducers.js !`);
            }
        });
    }
}

if (!name) {
    console.log('roc-action-utility needs at least the --name (-n) argument, -h for more informations.');
}
