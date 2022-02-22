export type Data = {
  img?: string;
  title?: string;
  description?: string;
  id: number;
};

export interface ICardProps {
  dataCard?: Data[];
}
