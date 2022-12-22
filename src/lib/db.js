
export function save(key, value, parser = JSON.stringify) {
  window.localStorage.setItem(key, parser(value));
}

export function load(key, defaultValue = null, parser = JSON.parse) {
  const data = window.localStorage.getItem(key);
  return data ? parser(data) : defaultValue;
}

export function remove(key) {
  return localStorage.removeItem(key);
}
