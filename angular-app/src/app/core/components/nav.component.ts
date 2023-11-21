import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="menu">
      <p class="menu-label">Menu</p>
      <ul class="menu-list">
        <a routerLink="/products" routerLinkActive="router-link-active">
          <span>Products</span>
        </a>
        <a routerLink="/about" routerLinkActive="router-link-active">
          <span>About</span>
        </a>
        <a href="/.auth/login/google">
          <span>Login Google</span>
        </a>
        <a href="/.auth/login/github?post_login_redirect_uri=/products">
          <span>Login GitHUb</span>
        </a>
        <a href="/.auth/logout?post_logout_redirect_uri=/home">
          <span>Log out</span>
        </a>
      </ul>
    </nav>
  `,
})
export class NavComponent {}
