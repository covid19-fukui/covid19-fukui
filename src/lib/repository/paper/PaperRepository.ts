import type { Paper } from 'src/models/Paper';

import { endPoint } from './PaperConfig';

/**
 * 新聞データの取得
 *
 * @returns 新聞のデータ
 */
export const getPapers = async (): Promise<Paper[]> => {
  return await fetch(endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data: any): Paper[] => {
      return data.articles.map((article: any) => {
        return {
          title: article.title,
          link: article.link,
          publishedAt: article.publishedAt,
        };
      });
    })
    .catch((error) => {
      console.error('新聞データの取得時にエラーが発生しました。', error);
      throw error;
    });
};
