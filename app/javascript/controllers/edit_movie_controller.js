import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["infos", "form"];

  connect() {
    console.log('hello world 123');
  }

  displayForm() {
    this.formTarget.classList.remove("d-none");
    this.infosTarget.classList.add("d-none");
  }

}
