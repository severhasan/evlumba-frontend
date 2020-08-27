exports.capitalizeEachWord = str => str.split(/\s+/g).map(w => this.capitalize(w)).join(' ').trim();


exports.capitalize = str => str.length > 1 ? str[0].toUpperCase() + str.slice(1,).toLowerCase() : str.toUpperCase();


exports.getNameWithoutExtention = str => {
    if (str.length === 0 || str.split('.').length === 1) return false;

    for (let idx = str.length - 1; idx > 0; idx--) {
        if (str[idx] === '.') {
            return str.slice(0, idx);
        }
    }
}