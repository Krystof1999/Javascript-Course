/**
 * EasyHTTP Library
 * Library for making HTTP request
 *
 * @version 3.0.0
 * @author KB
 * @licence CZU
 *
 * **/

class EasyHTTP {
  // Make an HTTP GET request
  async get(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  }

  // Make an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: "Delete",
      headers: {
        "Content-type": "application/json",
      },
    });

    const responseData = await "Resource deleted";
    return responseData;
  }
}
