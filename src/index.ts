import { NgModule, Injectable } from '@angular/core'
import { Theme } from 'terminus-core'

@Injectable()
class Windows10Theme extends Theme {
    name = 'Windows 10'
    css = require('./theme.scss')
    terminalBackground = '#383838'
}

@NgModule({
    providers: [
        { provide: Theme, useClass: Windows10Theme, multi: true },
    ],
})
export default class Windows10ThemeModule { }
