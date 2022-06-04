import csvtojson from 'csvtojson';
import type { CallCenter } from 'src/models/CallCenter';

import { endPoint } from './CallCenterConfig';

/**
 * コールセンター相談件数の取得
 *
 * @returns コールセンター相談件数データ
 */
export const getCallCenters = async (): Promise<CallCenter[]> => {
  return await fetch(endPoint)
    .then((response) => {
      return response.text();
    })
    .then((csv) => {
      return csvtojson().fromString(csv);
    })
    .then((json: any[]): CallCenter[] => {
      return json.map((row) => {
        return {
          acceptedDate: row['受付_年月日'],
          count: row['相談件数'],
        };
      });
    })
    .catch((error) => {
      console.error(
        'コールセンター相談件数データ取得時にエラーが発生しました。',
        error,
      );
      throw error;
    });
};
