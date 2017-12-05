import axios from 'axios'

function fetchData (type) {
  return function (url, option) {
    return axios[type](url, option)
  }
}

export const getFetch = fetchData('get')

export const postFetch = fetchData('post')
