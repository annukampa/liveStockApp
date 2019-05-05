export interface StockChartObject {
  'chart': ChartObject;
  'title': TitleObject;
  'credits': CreditsObject;
  'series': Array<SeriesObject>;
}

interface ChartObject {
  'type': string;
}

interface TitleObject {
  'text': string;
}

interface CreditsObject {
  'enabled': boolean;
}

interface SeriesObject {
  'name': string;
  'data': Array<object>;
}
