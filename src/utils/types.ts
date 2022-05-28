// Interface to defining our object of response functions
export interface ResponseFuncs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

// Interface to define our Todo model on the frontend
export interface Todo {
  _id?: number;
  item: string;
  completed: boolean;
}

export interface ProductListTypes {
  products: ProductType[];
}
export interface ProductType {
  _id?: number;
  img: string;
  motives: string;
}
