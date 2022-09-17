import { Contract } from "@paperbits/common";

export interface CollapsibleContract extends Contract { 
    sections: Array<any>;
}
