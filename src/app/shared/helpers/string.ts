/* https ://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
  Using:
  formatUnicorn('hello {0}, Im {1}', 'Gin', 'Developer'); // => 'hello Gin, I'm Developer'
  formatUnicorn('hello {0}, Im {1}', ['Gin', 'Developer']); // => 'hello Gin, I'm Developer'
  formatUnicorn('hello {guest}, Im {author}', {guest: 'Gin', author: 'Developer'}); // => 'hello Gin, I'm Developer'
*/
export const formatUnicorn = (value: any, ...args: any[]) => {
  let result = value.toString();

  if (args.length) {
    const t = typeof args[0];
    args = ('string' === t || 'number' === t) ? args : args[0];

    for (const key in args) {
      if (args.hasOwnProperty(key)) {
        result = result.replace(new RegExp('\\{' + key + '\\}', 'gi'), args[key]);
      }
    }
  }

  return result;
};

export const getFullName = (itemObject: any, firstNameProp?: string, lastNameProp?: string) => {
  if (!itemObject) {
    return '';
  }

  const firstName = itemObject.firstName || itemObject[firstNameProp];
  const lastName = itemObject.lastName || itemObject[lastNameProp];
  const middleName = itemObject.middleName || '';

  const parts = [];
  if (firstName) {
    parts.push(firstName);
  }

  if (middleName) {
    parts.push(middleName);
  }

  if (lastName) {
    parts.push(lastName);
  }

  return parts.join(' ');
};

export const join = (array: Array<any>, separator = ',') => {
  const condensedArray = array.filter((item) => {
    if (typeof item === 'string' && item.trim().length === 0) {
      return false;
    }

    if (item == null) {
      return false;
    }

    return true;
  });

  return condensedArray.join(separator);
};

export const split = (text: string, separator: string | RegExp = ',') => {
  if (!text) {
    return [];
  }

  let parts = text.split(separator);
  parts = parts.map((part) => part.trim());

  const results = parts.filter((part) => part.length > 0);
  return results;
};
