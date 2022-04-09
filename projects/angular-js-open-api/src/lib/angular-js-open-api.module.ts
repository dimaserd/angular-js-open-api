import { NgModule } from '@angular/core';
import { JsOpenApiMainComponent,
   JsWorkerExpansionPanelComponent, JsWorkerMethodComponent, JsOpenApiConsoleComponent, JsOpenApiRemoteDocsComponent,
    JsOpenApiRemoteExpansionPanelComponent, JsOpenApiLoggedVariableComponent, JsOpenApiExecutionLogComponent } from './components';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    JsOpenApiMainComponent,
    JsWorkerExpansionPanelComponent,
    JsWorkerMethodComponent,
    JsOpenApiConsoleComponent,
    JsOpenApiRemoteDocsComponent,
    JsOpenApiRemoteExpansionPanelComponent,
    JsOpenApiLoggedVariableComponent,
    JsOpenApiExecutionLogComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatSelectModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonToggleModule,
    RouterModule
  ],
  exports: [
  ]
})
export class AngularJsOpenApiModule { }
