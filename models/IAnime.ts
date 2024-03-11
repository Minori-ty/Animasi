import IImage from './IImage';

export default interface IAnime {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    canonicalTitle: string,
    description: string,
    posterImage?: IImage;
    coverImage?: IImage;
  };
  relationships: any;
};
