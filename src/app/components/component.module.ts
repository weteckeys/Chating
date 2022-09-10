



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TextAvatarComponent } from '../components/text-avatar/text-avatar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ChatOptionsComponent } from './chat-options/chat-options.component';
import { SettingOptionsComponent } from './setting-options/setting-options.component';


const components = [
    TextAvatarComponent,
    AccordionComponent,
    ChatOptionsComponent,
    SettingOptionsComponent
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ...components,
    ]
})
export class ComponentModule { }
