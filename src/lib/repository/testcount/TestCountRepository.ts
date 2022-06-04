import csvtojson from 'csvtojson';
import type { TestCount } from 'src/models/TestCount';

import { endPoint } from './TestCountConfig';

/**
 * 検査データを取得する
 *
 * @returns 検査データ
 */
export const getTestCounts = async (): Promise<TestCount[]> => {
  return await fetch(endPoint)
    .then((response) => {
      return response.text();
    })
    .then((csv) => {
      return csvtojson().fromString(csv);
    })
    .then((json: any[]): TestCount[] => {
      return json.map((row) => {
        return {
          testedDate: row['実施_年月日'],
          count: row['検査実施_件数'],
        };
      });
    })
    .catch((error) => {
      console.error('検査データ取得時にエラーが発生しました。', error);
      throw error;
    });
};
