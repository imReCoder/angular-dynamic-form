import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

const materialModules = [
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatInputModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatSidenavModule,
  MatCommonModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatTableModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
