export type Data = {
  img?: string;
  title?: string;
  description?: string;
  id: number;
};

export interface IFooterProps {
  dataCard?: Data[];
}
