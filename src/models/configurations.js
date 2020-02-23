const endpoint = 'https://api.jsonbin.io/b/5df3c10a2c714135cda0bf0f/1';

/**
 * Загружает данные с бекенда
 * @return {Promise}
 */
export const load = () => new Promise((resolve, reject) => {
  const url = endpoint;
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.addEventListener('load', function () {

    if (xhr.status === 200) {
      resolve(xhr.response);
    } else {
      reject('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
    }
  });

  xhr.addEventListener('error', function () {
    reject('Произошла ошибка соединения');
  });

  xhr.addEventListener('timeout', function () {
    reject('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
  });

  xhr.timeout = 10000; // 10s

  xhr.open('GET', url);
  xhr.send();
});



