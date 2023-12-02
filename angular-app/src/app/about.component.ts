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
        <h2 class="title">Database</h2>
          <div>
            <button (click)="listCommunities()">Get Communities</button>
          </div>
          <div>
            <button (click)="listLeagues()">Get Leagues</button>
          </div>
          <div>
            <button (click)="listTournaments()">Get Tournaments</button>
          </div>
          <div>
            <button (click)="listMetas()">Get Metas</button>
          </div>
          <div>
            <button (click)="listTeams()">Get Teams</button>
          </div>
      
    </div>
   
  `,
})
export class AboutComponent {


  async listCommunities(): Promise<void>  {
    const endpoint: string = '/data-api/rest/Communities';
    const response: Response = await fetch(endpoint);
    const data: any = await response.json();
    console.table(data.value);
  }

  async listLeagues(): Promise<void>  {
    const endpoint: string = '/data-api/rest/Leagues';
    const response: Response = await fetch(endpoint);
    const data: any = await response.json();
    console.table(data.value);
  }
  
  async listTournaments(): Promise<void>  {
    const endpoint: string = '/data-api/rest/Tournaments';
    const response: Response = await fetch(endpoint);
    const data: any = await response.json();
    console.table(data.value);
  }


  async listTeams(): Promise<void>  {
    const endpoint: string = '/data-api/rest/Teams';
    const response: Response = await fetch(endpoint);
    const data: any = await response.json();
    console.table(data.value);
  }

  async listMetas(): Promise<void>  {
    const endpoint: string = '/data-api/rest/Metas';
    const response: Response = await fetch(endpoint);
    const data: any = await response.json();
    console.table(data.value);
  }
}
