function randomChar(chars) {
  let randomIndex = Math.floor(Math.random() * chars.length);
  return chars[randomIndex];
}

function generatePassword(options) {
  // set user options
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = '1234567890';
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';
  // create collection for user options
  let collection = [];

  if (options.lowercase === 'on')
    collection = collection.concat(lowerCaseLetters.split(''));
  if (options.uppercase === 'on')
    collection = collection.concat(upperCaseLetters.split(''));
  if (options.numbers === 'on')
    collection = collection.concat(numbers.split(''));
  if (options.symbols === 'on')
    collection = collection.concat(symbols.split(''));
  // remove excluded options
  if (options.excludeCharacters) {
    collection = collection.filter(
      char => !options.excludeCharacters.includes(char)
    );
  }
  // generate password
  let password = '';
  for (let i = 0; i < options.length; i++) {
    password += randomChar(collection);
  }
  // return error if nothing in collection
  if (collection.length === 0)
    return 'There is no valid character in your selection';

  // return password
  return password;
  // console.log(collection);
}

// export function for other file usage
module.exports = generatePassword;
