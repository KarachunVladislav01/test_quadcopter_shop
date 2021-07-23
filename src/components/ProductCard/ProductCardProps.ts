import { Quadcopter } from "../../redux/redusers/quadcopters.reducer";

export interface ProductCardProps {
    style?: object;
    activeOpacity?: number;
    product: Quadcopter;
}
