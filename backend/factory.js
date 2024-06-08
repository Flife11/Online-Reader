const fs = require('fs');
const path = require('path');

module.exports = new class Factory {
    constructor() {
        this.domainCache = new Map();
        let files = fs.readdirSync(path.resolve(__dirname, './Services'));
        files.forEach(file => {
            let domainName = file.split('.')[0];
            this.addDomain(domainName);
        });
    }

    addDomain(domainName) {
        const newDomain = require(`./Services/${domainName}`);
        this.domainCache.set(domainName, newDomain);
    }

    removeDomain(domainName) {
        this.domainCache.delete(domainName);
    }

    getDomain(domainName) {
        return this.domainCache.get(domainName);
    }
}