export interface Theme {
  colors?: {
    primary?: {
      50?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
    };
    [key: string]: any;
  };
  spacing?: {
    [key: string]: string;
  };
  borderRadius?: {
    [key: string]: string;
  };
  [key: string]: any;
}
