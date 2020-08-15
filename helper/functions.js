exports.capitalizeEachWord = str => str.split(/\s+/g).map(w => this.capitalize(w)).join(' ').trim();


exports.capitalize = str => str.length > 1 ? str[0].toUpperCase() + str.slice(1,).toLowerCase() : str.toUpperCase();