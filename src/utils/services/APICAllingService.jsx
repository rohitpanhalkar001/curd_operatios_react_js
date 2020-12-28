import axios from "axios";

let APICallingService = {
  sendPostFormDataRequest: async (url, payload) => {
    let options = {
      method: "POST",
      url,
      timeout: 1000 * 5 * 60,
      withCredentials: true,
      handlerEnabled: false,
      headers: {
        "Content-Type": "multipart/form-data"
      },
      data: payload
    };
    console.log("Options: ", options);
    try {
      return await axios(options)
        .then(response => {
          let responseOK = response && response.data;
          console.log("response.data: " + JSON.stringify(response.data));
          if (
            responseOK &&
            (response.status === 200 || response.status === 204)
          ) {
            return {
              success: true,
              status: "Success",
              data: response.data,
              dataForToken: response
            };
          } else {
            if (response.status === 401) {
              return {
                success: false,
                status: "Failed",
                error: response.data
              };
            }
            return {
              success: false,
              status: "Failed",
              error: response.data
            };
          }
        })
        .catch(e => {
          console.log("Inside catch: ", e);
          if (e.response.status === 401) {
            // TODO
            // console.log("response.data: " + JSON.stringify(response));
          }
          return {
            success: false,
            status: "Failed",
            error: e
          };
        });
    } catch (e) {
      console.log("Inside catch: ", e);
      return {
        success: false,
        status: "Failed",
        error: e
      };
    }
  },

  sendPostRequest: async (url, payload) => {
    console.log("sendPostRequest" + url);
    console.log("sendPostRequest" + payload);
    let options = {
      method: "POST",
      url,
      timeout: 1000 * 5 * 60,
      headers: {
        "Content-Type": "application/json"
      },
      data: payload
    };
    console.log("Options: ", options);
    try {
      return await axios(options)
        .then(response => {
          let responseOK = response && response.data;
          console.log("Post response.data: " + JSON.stringify(response));
          if (
            responseOK &&
            (response.status === 200 || response.status === 204)
          ) {
            return {
              success: true,
              status: "Success",
              data: response.data,
              dataForToken: response
            };
          } else {
            if (response.status === 401) {
              console.log("Error response.data: " + JSON.stringify(response));
              return {
                success: false,
                status: "Failed",
                error: response.data
              };
            }
            return {
              success: false,
              status: "Failed",
              error: response.data
            };
          }
        })
        .catch(e => {
          console.log("Inside catch: Something went wrong ", e);
          if (e === 400) {
          }
          if (e.response.status === 401) {
            // TODO
            // console.log("Catch response.data: " + JSON.stringify(response));
          }
          return {
            success: false,
            status: "Failed",
            error: e
          };
        });
    } catch (e) {
      console.log("Inside catch: ", e);
      return {
        success: false,
        status: "Failed",
        error: e
      };
    }
  },

  sendPostImageDataRequest: async (url, payload) => {
    let options = {
      method: "POST",
      url,
      timeout: 1000 * 5 * 60,
      // contentType:false,
      // processData:false,
      // mimeType:"multipart/form-data",
      headers: {
        // 'Accept': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: payload
    };
    console.log("Options: ", options);
    try {
      return await axios(options)
        .then(response => {
          let responseOK = response && response.data;
          console.log("response.data success: " + JSON.stringify(response));
          if (
            responseOK &&
            (response.status === 200 || response.status === 204)
          ) {
            return {
              success: true,
              status: "Success",
              data: response.data,
              dataForToken: response
            };
          } else {
            if (response.status === 401) {
              return {
                success: false,
                status: "Failed",
                error: response.data
              };
            }
            return {
              success: false,
              status: "Failed",
              error: response.data
            };
          }
        })
        .catch(e => {
          console.log("Inside catch @@!: ", e);
          if (e.response.status === 401) {
            // TODO
            // console.log("response.data: " + JSON.stringify(response));
          }
          return {
            success: false,
            status: "Failed",
            error: e
          };
        });
    } catch (e) {
      console.log("Inside catch @@2: ", e);
      return {
        success: false,
        status: "Failed",
        error: e
      };
    }
  },

  sendPostImageRequest: url => {
    let options = {
      method: "POST",
      timeout: 1000 * 5 * 60,
      withCredentials: true,
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf"
      },
      url
    };
    console.log("Options: ", options);
    try {
      return axios(options).then(response => {
        let responseOK = response && response.data;
        console.log("response.data: " + JSON.stringify(response.data));
        if (responseOK) {
          return {
            success: true,
            status: "Success",
            data: response.data,
            dataForToken: response
          };
        } else {
          if (response.status === 401) {
            // TODO
            console.log("response.data: " + JSON.stringify(response));
          }
        }
        return {
          success: false,
          status: "Failed",
          error: response.data
        };
      });
    } catch (e) {
      return {
        success: false,
        status: "Failed",
        error: e
      };
    }
  },

  sendGetImageRequest: url => {
    let options = {
      method: "GET",
      timeout: 1000 * 5 * 60,
      withCredentials: true,
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "image/png"
      },
      url
    };
    console.log("Options: ", options);
    try {
      return axios(options).then(response => {
        let responseOK = response && response.data;
        console.log("response.data: " + JSON.stringify(response.data));
        if (responseOK) {
          return {
            success: true,
            status: "Success",
            data: response.data,
            dataForToken: response
          };
        } else {
          if (response.status === 401) {
            // TODO
            console.log("response.data: " + JSON.stringify(response));
          }
        }
        return {
          success: false,
          status: "Failed",
          error: response.data
        };
      });
    } catch (e) {
      return {
        success: false,
        status: "Failed",
        error: e
      };
    }
  },

  sendGetRequest: url => {
    let options = {
      method: "GET",
      timeout: 1000 * 5 * 60,
      headers: {
        "Content-Type": "application/json"
      },
      url
    };
    console.log("Options: ", options);
    try {
      return axios(options).then(response => {
        console.log("Get Session response.data: " + JSON.stringify(response));

        let responseOK = response && response.data;

        debugger;

        if (responseOK) {
          return {
            success: true,
            status: "Success",
            data: response.data,
            dataForToken: response
          };
        } else {
          if (response.status === 401) {
            // TODO
            debugger;
            console.log("Error response.data: " + JSON.stringify(response));
          }
        }
        return {
          success: false,
          status: "Failed",
          error: response.data
        };
      });
    } catch (e) {
      console.log("Inside catch: ", e);
      debugger;

      return {
        success: false,
        status: "Failed",
        error: e
      };
    }
  }
};

// let instance = axios.create();

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    console.log("axios interceptor response is " + JSON.stringify(response));
    return response;
  },
  function(error) {
    if (error.response) {
      // Request made and server responded
      console.log("axios interceptor error is " + JSON.stringify(error));

      var statusCode = error.response.status;

      return Promise.reject(error.response.status);
    }
    return Promise.reject(error);
  }
);

export default APICallingService;
