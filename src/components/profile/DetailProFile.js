import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function DetailProFile() {
  return (
    <section class="lattest-product-area pb-40 category-list">
      <div class="row">
        <form>
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" />
        </form>
        <div />
      </div>
    </section>
  );
}

export default DetailProFile;
