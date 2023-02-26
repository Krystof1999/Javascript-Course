function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make and HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// Make and HTTP POST request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make and HTTP PUT request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// Make and HTTP DELETE request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "post deleted");
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
