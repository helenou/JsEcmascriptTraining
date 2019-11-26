
function foo(){
  return "Utils::foo()";
}

const array = ['foo', 'bar', 'baz'];
const data = ['Jan', 'Feb', 'Mar'];


export function bar(){
  return "Utils::bar()";
}

export function baz(){
  return "Utils::baz()";
}

export { foo, array, data as month }


