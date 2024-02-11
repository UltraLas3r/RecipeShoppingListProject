import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',

    styles: [`
    .selected-text {
      font-weight: bold;
      text-decoration: underline;
    }
  `]

})


export class HeaderComponent {
    collapsed = true;
    selectedTab: string;
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelected.emit(feature);


    }

    onTabSelect(tab: string) {
        this.selectedTab = tab;
    }

}