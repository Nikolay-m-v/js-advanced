(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (this.startsWith(str)) {
      return this.toString();
    }
    return str + this;
  };

  String.prototype.ensureEnd = function (str) {
    if (this.endsWith(str)) {
      return this.toString();
    }
    return this + str;
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (this.length <= n) {
      return this.toString();
    }

    if (n < 4) {
      return ".".repeat(n);
    } else {
      let lastIndex = this.substring(0, n - 2).lastIndexOf(" ");
      if (lastIndex !== -1) {
        return this.substring(0, lastIndex) + "...";
      } else {
        return this.substring(0, n - 3) + "...";
      }
    }
  };

  String.prototype.format = function (string, ...params) {
    params.forEach((param, index) => {
      string = string.replace(`${index}`, param);
    });
    return string;
  };
})();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);

String.prototype.format = function (string, ...params) {
  params.forEach((param, index) => {
    string = string.replace(`{${index}}`, param);
  });
  return string;
};

str = str.format("The {0} {1} fox", "quick", "brown");
str = str.format("jumps {0} {1}", "over", "the lazy dog");

console.log(str);
