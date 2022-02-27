import {Type} from "@angular/core";
import {LoginComponent} from "../components/popups/login/login.component";

export interface PopupData {
    component: Type<unknown>;
}

export interface PopupList {
    [key: string]: PopupData;
}

export const POPUP_LIST: PopupList = {
    'login': {component: LoginComponent},
    'register': {component: LoginComponent}
};