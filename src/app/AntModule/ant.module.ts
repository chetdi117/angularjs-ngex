import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzMenuModule } from 'ng-zorro-antd/menu';
@NgModule({
  declarations: [],
  imports: [
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzDividerModule,
    NzLayoutModule,
    NzSpaceModule,
    NzAffixModule,
    NzMenuModule,
  ],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzDividerModule,
    NzLayoutModule,
    NzSpaceModule,
    NzAffixModule,
    NzMenuModule,
  ],
  providers: [],
  bootstrap: [],
})
export class AntModule {}
