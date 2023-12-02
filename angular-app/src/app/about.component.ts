import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="content-container">
      <div class="content-title-group not-found">
        <h2 class="title">Product Wish List</h2>
        <p>
          This project was created to help represent a fundamental app written
          with Angular. The shopping theme is used throughout the app.
        </p>
        <br />
        <h2 class="title">Resources</h2>
        <ul>
          <li>
            <a href="https://github.com/MicrosoftDocs/mslearn-staticwebapp">
              Code in GitHub
            </a>
          </li>
        </ul>
        <h2 class="title">Database Info</h2>
        <div>
          <button id="list" onclick="list()">List</button>
          <button id="get" onclick="get()">Get</button>
          <button id="update" onclick="update()">Update</button>
          <button id="create" onclick="create()">Create</button>
          <button id="delete" onclick="del()">Delete</button>
        </div>
        <script>
          async function list() {
            const endpoint = '/data-api/rest/Person';
            const response = await fetch(endpoint);
            const data = await response.json();
            console.table(data.value);
        }

        </script>
      </div>
    </div>
  `,
})
export class AboutComponent {}
