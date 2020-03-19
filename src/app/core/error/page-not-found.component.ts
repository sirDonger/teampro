import { Component } from '@angular/core';

@Component({
  selector: 'xb-error-404',
  template: `
<div class="auth-main">
  <div class="auth-block">
    <h1>You are lost 404</h1>
    <div class="auth-sep"><span><span>Please Try Again</span></span></div>
    <div class="al-share-auth">
      <ul class="al-share clearfix">
        <li> <a routerLink="/home" class="auth-link"><i class="ion-home" title="home"></i></a></li>
      </ul>
    </div>
  </div>
</div>
`,
  styleUrls: ['./error.component.scss']
})
export class PageNotFoundComponent {}
