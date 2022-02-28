import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
    console.log(this.formTarget)
    console.log(this.inputTarget)
    console.log(this.listTarget)
  }

  update() {
    const requestUrl = `${this.formTarget.action}?query=${this.inputTarget.value}`;
    fetch(requestUrl, { headers: { "Accept": "text/plain" } })
      .then(res => res.text())
      .then((data) => {
        this.listTarget.outerHTML = data;
      })
  }
}
