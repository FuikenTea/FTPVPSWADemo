import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';


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
        <h2 class="title">Database Communities</h2>
        <button (click)="list()">Click Me</button>
      </div>
    </div>
   
  `,
})
export class AboutComponent {


  async list(): Promise<void>  {
    const endpoint: string = '/data-api/rest/Communities';
    const response: Response = await fetch(endpoint);
    const data: any = await response.json();
    console.table(data.value);
  }
}
