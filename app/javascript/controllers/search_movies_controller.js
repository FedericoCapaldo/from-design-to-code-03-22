import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ["form", "input", "list"]

  update() {
    const requestUrl = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    fetch(requestUrl, { headers: { "Accept": "text/plain" } })
      .then(res => res.text())
      .then((data) => {
        this.listTarget.outerHTML = data;
      })
  }
}
