import { Routes } from '@angular/router';
import { FirtComponent } from './component/firt/firt.component';
import { SecondComponent } from './component/second/second.component';


export const routes: Routes = [
    { path: 'first-component', component: FirtComponent },
    { path: 'second-component', component: SecondComponent },
];
