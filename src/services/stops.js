import { Http } from 'fluent-http'
import { baseUrl } from '../config/env'

const http = new Http()

export function getStops() {
  return http.withUrl(`${baseUrl}/stops`)
    .request()
    .then((response) => response.data)
}

export function getStop(id) {
  return http.withUrl(`${baseUrl}/stops/${id}`)
    .request()
    .then((response) => response.data)
}
