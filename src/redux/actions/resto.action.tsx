import { MenuIf } from "../../interfaces"

export const newMenu = (menu: MenuIf) => {
    return {
        type: 'NEW_MENU',
        payload: menu
    }
}

