interface IEntities {
  date: string[];
  keyword: string[];
  location: string[];
  person: string[];
  organization: string[];
}

interface ICategory {
  code: string;
  confidence: number;
  label: string;
}

interface ILocation {
  area: string;
  brgyCount: number;
  formattedAddress: string;
  googlePlaceId: string;
  location: string;
  position: {
    $reql_type$: 'GEOMETRY';
    coordinates: number[];
    type: 'Point';
  };
  province: string;
  psgc: string;
  region: {
    long: string;
    short: string;
  };
  type: 'City' | 'Municipality';
}

export interface IArticleDocument {
  authors: string[];
  entities: IEntities;
  hashtags: string[];
  categories: ICategory[];
  id: string;
  image: string;
  locations: ILocation[];
  publish_date: string;
  sentiment: {
    polarity: 'positive' | 'neutral' | 'negative';
    polarity_confidence: number;
    subjectivity: 'subjective' | 'objective';
    subjectivity_confidence: number;
  };
  summary: {
    paragraph: string;
    sentences: string[]
  };
  title: string;
  url: string;
}
