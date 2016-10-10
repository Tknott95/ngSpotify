import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [

	{
	path: '',
	component: SearchComponent
	
	},
	{
	path: 'about',
	component: AboutComponent
	}


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);