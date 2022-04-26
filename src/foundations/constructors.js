function Address(info) {
  this.info = info;
  this.printInfo = () => {
    console.log(this.info);
  };
}

function SafeAddress(info) {
  return new Address(info);
}

function SafeAddressPattern(info) {
  if (this instanceof SafeAddressPattern) {
    this.info = info;
    this.printInfo = () => {
      console.log(this.info);
    };
  } else {
    return new SafeAddressPattern(info);
  }
}

const address = Address('123 1st ave');
console.log('Invoking Address without the "new" keyword will pollute the global namespace');
console.log('Notice how address variable becomes undefined', { address });
console.log('So the global namespace gets an unwanted new variable "info"', { info: global.info });
console.log('And also defines along a "printInfo" function', { printInfo: global.pr });

delete global.info;
delete global.printInfo;

const safeAddress = SafeAddress('345 2nd ave');
console.log('\n');
console.log('On other hand, "SafeAddress" will guarantee to always invoke "Address" using the "new" keyword');
console.log('So now address object is correct instantiated', { safeAddress });
console.log('And finally no "info" variable or "printInfo" function defined in the global namespace', { info: global?.info, printInfo: global?.printInfo });

const safeAddressPattern1 = SafeAddressPattern('789 3rd ave');
const safeAddressPattern2 = new SafeAddressPattern('789 3rd ave');
console.log('\n');
console.log('In a last example, "SafeAddressPattern" will always be safe to invoke, either with "new" or directly');
console.log('const safeAddressPattern1 = SafeAddressPattern("789 3rd ave");', { safeAddressPattern1 });
console.log('const safeAddressPattern2 = new SafeAddressPattern("789 3rd ave");', { safeAddressPattern2 });
